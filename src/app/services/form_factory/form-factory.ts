import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormsFieldsConfig, StepConfig } from '../../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class FormFactory {
  constructor(private fb: FormBuilder) {}

  createForm(step: StepConfig): FormGroup {
    const group: any = {};

    step.fields.forEach(field => {
      if (field.type === 'array') {
        group[field.key] = this.fb.array([]);
      } else {
        group[field.key] = ['', field.validators || []];
      }
    });

    return this.fb.group(group);
  }

  createArrayGroup(fields: FormsFieldsConfig[]): FormGroup {
    const group: any = {};
    fields.forEach(f => {
      group[f.key] = ['', f.validators || []];
    });
    return this.fb.group(group);
  }
}
