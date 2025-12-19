import { ValidatorFn } from '@angular/forms';

export interface FormOption {
  label: string;
  value: any;
}

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'file'
  | 'array';

export interface ResponsiveCol {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface FormsFieldsConfig {
  key: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  validators?: ValidatorFn[];

  /* ===== UI ONLY ===== */
  col?: number;                 // fallback
  responsive?: ResponsiveCol;   // 👈 responsive grid
  forceNewRow?: boolean;

  options?: FormOption[];

  /* ===== FormArray ===== */
  arrayFields?: FormsFieldsConfig[];
}

export interface StepConfig {
  stepNumber: number;
  title: string;
  fields: FormsFieldsConfig[];
}
