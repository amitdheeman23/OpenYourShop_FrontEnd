import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { FormsFieldsConfig, StepConfig } from '../../interFaces/formsFieldsInterfaces/formsFieldsinterfaces';
import { passwordMatchValidator } from '../../config/validators/password-match.validator';

@Injectable({ providedIn: 'root' })
export class FormFactory {
  constructor(private fb: FormBuilder) {}

  /* ================= CREATE FORM ================= */

  createForm(step: StepConfig): FormGroup {
    const group: any = {};

    step.fields.forEach(field => {
      let defaultValue = field.defaultValue ?? null;

      // 🔥 select / dropdown / radio
      if (
        field.type === 'select' ||
        field.type === 'dropdown' ||
        field.type === 'radio'
      ) {
        defaultValue = field.defaultValue ?? null;
      }

      // 🔥 checkbox / switch
      if (field.type === 'checkbox' || field.type === 'switch') {
        defaultValue = field.defaultValue ?? false;
      }

      // 🔥 array
      if (field.type === 'array') {
        defaultValue = [];
      }

      group[field.key] = new FormControl(
        defaultValue,
        field.validators || []
      );
    });

    const formGroup = new FormGroup(group);

    /* ================= PASSWORD MATCH VALIDATION ================= */
    const hasPassword = step.fields.some(f => f.key === 'password');
    const hasConfirmPassword = step.fields.some(
      f => f.key === 'confirmPassword'
    );

    if (hasPassword && hasConfirmPassword) {
      formGroup.setValidators(
        passwordMatchValidator('password', 'confirmPassword')
      );
    }

    return formGroup;
  }

  /* ================= ARRAY GROUP ================= */

  createArrayGroup(fields: FormsFieldsConfig[]): FormGroup {
    const group: any = {};

    fields.forEach(f => {
      group[f.key] = new FormControl(
        f.defaultValue ?? null,
        f.validators || []
      );
    });

    return this.fb.group(group);
  }
}
