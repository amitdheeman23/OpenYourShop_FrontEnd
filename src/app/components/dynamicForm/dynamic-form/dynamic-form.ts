import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsFieldsConfig, StepConfig } from '../../../interfaces/interfaces';
import { FormFactory } from '../../../services/form_factory/form-factory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
})
export class DynamicForm implements OnInit {
  @Input() steps: StepConfig[] = [];   // 🔥 ALWAYS ARRAY
  @Output() submitForm = new EventEmitter<any>();

  forms: FormGroup[] = [];
  stepIndex = 0;
noNextSteps: string[] = ['Login', 'Sign In', 'Email Verification'];

  constructor(private formFactory: FormFactory) {}

  ngOnInit(): void {
    this.forms = this.steps.map(step =>
      this.formFactory.createForm(step)
    );
  }

  get isWizard(): boolean {
    return this.steps.length > 1;
  }

  get currentStep(): StepConfig {
    return this.steps[this.stepIndex];
  }

  get currentForm(): FormGroup {
    return this.forms[this.stepIndex];
  }

  /* ---------- navigation ---------- */

  next() {
    if (this.currentForm.valid) {
      this.stepIndex++;
    } else {
      this.currentForm.markAllAsTouched();
    }
  }

  back() {
    this.stepIndex--;
  }

  submit() {
    const finalData = Object.assign(
      {},
      ...this.forms.map(f => f.value)
    );
    this.submitForm.emit(finalData);
  }

  /* ---------- FormArray helpers ---------- */

  getArray(key: string): FormArray {
    return this.currentForm.get(key) as FormArray;
  }

  addArrayItem(key: string, fields: FormsFieldsConfig[] = []) {
    this.getArray(key).push(
      (this.formFactory as any).createArrayGroup(fields)
    );
  }

  /* ---------- File ---------- */

  onFileChange(event: Event, controlName: string): void {
    const input = event.target as HTMLInputElement | null;
    if (!input?.files?.length) return;
    this.currentForm.get(controlName)?.setValue(input.files[0]);
  }
  isNoNextStep(): boolean {
  return this.noNextSteps.includes(this.currentStep.title);
}

}