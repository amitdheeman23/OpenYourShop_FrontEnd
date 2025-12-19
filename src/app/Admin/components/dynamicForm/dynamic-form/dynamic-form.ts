import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsFieldsConfig, StepConfig } from '../../../../interfaces/interfaces';
import { FormFactory } from '../../../../services/form_factory/form-factory';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.html',
})
export class DynamicForm implements OnInit {

  @Input() steps: StepConfig[] = [];
  @Input() defaultCol = 12;

  @Output() submitForm = new EventEmitter<any>();

  forms: FormGroup[] = [];
  stepIndex = 0;

  rows: FormsFieldsConfig[][] = [];

  constructor(private factory: FormFactory) {}

  ngOnInit(): void {
    this.forms = this.steps.map(step => this.factory.createForm(step));
    this.buildRows();
  }

  get currentStep(): StepConfig {
    return this.steps[this.stepIndex];
  }

  get currentForm(): FormGroup {
    return this.forms[this.stepIndex];
  }

  /* ===== ROW BUILDER (MAIN MAGIC) ===== */

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

  /* ===== FORM ARRAY ===== */

  getArray(key: string): FormArray {
    return this.currentForm.get(key) as FormArray;
  }

  addArrayItem(key: string, fields: FormsFieldsConfig[]) {
    this.getArray(key).push(this.factory.createArrayGroup(fields));
  }

  /* ===== SUBMIT ===== */

  submit() {
    const payload: any = {};
    this.forms.forEach(f => Object.assign(payload, f.value));
    this.submitForm.emit(payload);
  }

  next() {
    if (this.currentForm.valid) {
      this.stepIndex++;
      this.buildRows();
    } else {
      this.currentForm.markAllAsTouched();
    }
  }

  back() {
    this.stepIndex--;
    this.buildRows();
  }

  /* ===== RESPONSIVE CLASS ===== */

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
}
