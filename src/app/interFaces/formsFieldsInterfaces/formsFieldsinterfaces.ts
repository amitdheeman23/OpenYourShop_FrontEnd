import { ValidatorFn } from '@angular/forms';

export interface FormOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'textarea'
  | 'select'
  | 'dropdown'
  | 'radio'
  | 'checkbox'
  | 'multi-checkbox'
  | 'switch'
  | 'date'
  | 'time'
  | 'datetime'
  | 'month'
  | 'week'
  | 'file'
  | 'image'
  | 'video'
  | 'audio'
  | 'range'
  | 'color'
  | 'rating'
  | 'otp'
  | 'chips'
  | 'autocomplete'
  | 'rich-text'
  | 'json'
  | 'markdown'
  | 'location'
  | 'address'
  | 'country'
  | 'state'
  | 'city'
  | 'pincode'
  | 'hidden'
  | 'readonly'
  | 'label'
  | 'divider'
  | 'group'
  | 'array'
  | 'stepper';

export interface ResponsiveCol {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface FieldCondition {
  key: string;
  operator: '==' | '!=' | '>' | '<' | '>=' | '<=' | 'in';
  value: any;
}

export interface FormsFieldsConfig {
  key: string;
  type: FieldType;

  label?: string;
  placeholder?: string;
  hint?: string;
  defaultValue?: any;

  validators?: ValidatorFn[];
  required?: boolean;

  col?: number;
  responsive?: ResponsiveCol;
  forceNewRow?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hidden?: boolean;

  options?: FormOption[];
  multiple?: boolean;

  min?: number | null;
  max?: number | null;
  step?: number | null;

  accept?: string;
  maxSizeMB?: number;

  showIf?: FieldCondition[];
  hideIf?: FieldCondition[];
  autocomplete?: string;

  arrayFields?: FormsFieldsConfig[];
  minItems?: number;
  maxItems?: number;

  /* 🔥 INPUT GROUP SUPPORT (NEW) */
  prefixText?: string;        // @ , $ , .00
  suffixText?: string;
  prefixIcon?: string;        // fas fa-envelope
  suffixIcon?: string;
  addonCheckbox?: boolean;
  addonRadio?: boolean;
  addonButton?: {
    text: string;
    class?: string;
  };
}


export interface StepConfig {
  stepNumber: number;
  title: string;
  description?: string;
  fields: FormsFieldsConfig[];
}
