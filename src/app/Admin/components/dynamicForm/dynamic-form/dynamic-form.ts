import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsFieldsConfig, StepConfig } from '../../../../interfaces/interfaces';
import { FormFactory } from '../../../../services/form_factory/form-factory';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.html',
})
export class DynamicForm implements OnInit, OnChanges {
  @Input() steps: StepConfig[] = [];
  @Input() defaultCol = 12;

  @Output() submitForm = new EventEmitter<any>();

  forms: FormGroup[] = [];
  stepIndex = 0;
  rows: FormsFieldsConfig[][] = [];

  editingMap: Record<string, number | null> = {};
  filePreviews: Record<string, string> = {};

  constructor(private factory: FormFactory) {}

  /* ================= INIT ================= */

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['steps']?.currentValue?.length) {
      this.stepIndex = 0;
      this.initForm();
    }
  }

  private initForm() {
    this.forms = this.steps.map(step => {
      const form = this.factory.createForm(step);

      Object.keys(form.controls).forEach(key => {
        if (form.get(key)?.value === undefined) {
          form.get(key)?.setValue(null);
        }
      });

      return form;
    });

    this.buildRows();
  }

  /* ================= GETTERS ================= */

  get currentStep(): StepConfig {
    return this.steps[this.stepIndex];
  }

  get currentForm(): FormGroup {
    return this.forms[this.stepIndex];
  }

  getControl(key: string) {
    return this.currentForm.get(key);
  }

  /* ================= ROW BUILDER ================= */

  buildRows() {
    this.rows = [];
    let row: FormsFieldsConfig[] = [];
    let colCount = 0;

    this.currentStep.fields.forEach(field => {
      const col = field.col ?? this.defaultCol;

      if (field.forceNewRow || colCount + col > 12) {
        if (row.length) this.rows.push(row);
        row = [];
        colCount = 0;
      }

      row.push({ ...field, col });
      colCount += col;

      if (colCount === 12) {
        this.rows.push(row);
        row = [];
        colCount = 0;
      }
    });

    if (row.length) this.rows.push(row);
  }

  /* ================= VALIDATION ================= */

  shouldShowError(key: string): boolean {
    const control = this.getControl(key);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  getErrorMessage(field: FormsFieldsConfig): string {
    const control = this.getControl(field.key);
    if (!control || !control.errors) return '';

    const errors = control.errors;

    if (errors['required']) return `${field.label || 'This field'} is required`;
    if (errors['email']) return `Enter a valid email`;
    if (errors['minlength'])
      return `Minimum ${errors['minlength'].requiredLength} characters required`;
    if (errors['maxlength'])
      return `Maximum ${errors['maxlength'].requiredLength} characters allowed`;
    if (errors['min']) return `Minimum value is ${errors['min'].min}`;
    if (errors['max']) return `Maximum value is ${errors['max'].max}`;
    if (errors['pattern']) return `Invalid format`;
    if (errors['passwordMismatch'])
  return 'Password and Confirm Password do not match';


    return `Invalid value`;
  }

  /* ================= FORM ARRAY ================= */

  getArray(key: string): FormArray {
    return this.currentForm.get(key) as FormArray;
  }

  addArrayItem(key: string, fields: FormsFieldsConfig[]) {
    this.getArray(key).push(this.factory.createArrayGroup(fields));
  }

  removeArrayItem(key: string, index: number) {
    this.getArray(key).removeAt(index);
  }

  /* ================= FILE ================= */

  onFileChange(event: Event, key: string) {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files.length) return;

    const file = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.filePreviews[key] = reader.result as string;
    };
    reader.readAsDataURL(file);

    this.currentForm.get(key)?.setValue(file);
    this.currentForm.get(key)?.markAsTouched();
  }

  getFilePreview(key: string): string {
    return this.filePreviews[key] || '';
  }

  removeFile(key: string, input: HTMLInputElement) {
    delete this.filePreviews[key];
    this.currentForm.get(key)?.setValue(null);
    this.currentForm.get(key)?.markAsTouched();
    input.value = '';
  }

  /* ================= SUBMIT ================= */

  submit() {
    let hasInvalid = false;

    this.forms.forEach(form => {
      if (form.invalid) {
        hasInvalid = true;
        form.markAllAsTouched();
        form.updateValueAndValidity();
      }
    });

    if (hasInvalid) {
      this.stepIndex = this.forms.findIndex(f => f.invalid);
      this.buildRows();
      return;
    }

    const payload: any = {};
    this.forms.forEach(f => Object.assign(payload, f.value));

    this.submitForm.emit(payload);
  }

  /* ================= STEP NAV ================= */

  next() {
    if (this.currentForm.valid) {
      this.stepIndex++;
      this.buildRows();
    } else {
      this.currentForm.markAllAsTouched();
      this.currentForm.updateValueAndValidity();
    }
  }

  back() {
    this.stepIndex--;
    this.buildRows();
  }

  /* ================= HELPERS ================= */

  getColClass(field: any): string {
    if (field.responsive) {
      return `
        col-${field.responsive.sm ?? 12}
        col-md-${field.responsive.md ?? field.col}
        col-lg-${field.responsive.lg ?? field.col}
        col-xl-${field.responsive.xl ?? field.col}
      `;
    }
    return `col-md-${field.col}`;
  }

  trackRow = (_: number, row: any[]) => row;
  trackField = (_: number, field: any) => field.key;
    toggleEdit(arrayKey: string, index: number) {
  this.editingMap[arrayKey] =
    this.editingMap[arrayKey] === index ? null : index;
}
}
