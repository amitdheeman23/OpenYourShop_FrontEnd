import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsFieldsConfig, StepConfig } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormFactory {
   constructor(private fb: FormBuilder) {}

  createForm(step: StepConfig): FormGroup {
    const group: any = {};

    step.fields.forEach(field => {
      if (field.type === 'array') {
        group[field.key] = this.fb.array([
          this.createArrayGroup(field.arrayFields || [])
        ]);
      } else {
        group[field.key] = [
          this.getDefaultValue(field),
          field.validators || []
        ];
      }
    });

    return this.fb.group(group);
  }

  private createArrayGroup(fields: FormsFieldsConfig[]): FormGroup {
    const group: any = {};
    fields.forEach(f => {
      group[f.key] = [this.getDefaultValue(f), f.validators || []];
    });
    return this.fb.group(group);
  }

  private getDefaultValue(field: FormsFieldsConfig): any {
    if (field.type === 'checkbox' || field.type === 'multi-select') return [];
    if (field.type === 'file') return null;
    return '';
  }
}