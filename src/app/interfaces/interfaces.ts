import { ValidatorFn } from '@angular/forms';

export interface FormOption {
  label: string;
  value: any;
}

export interface FormsFieldsConfig {
  key: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'textarea'
    | 'select'
    | 'multi-select'
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'file'
    | 'array';

  label: string;
  placeholder?: string;
  validators?: ValidatorFn[];

  /* select / radio */
  options?: FormOption[];

  /* FormArray */
  arrayFields?: FormsFieldsConfig[];
}

export interface StepConfig {
  stepNumber: number;
  title: string;
  fields: FormsFieldsConfig[];
}
