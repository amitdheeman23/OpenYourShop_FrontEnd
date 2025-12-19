import { Validators } from '@angular/forms';
import { StepConfig } from '../interfaces/interfaces';

export const LOGIN_FORM: StepConfig[] = [
  {
    stepNumber: 1,
    title: 'Login',
    fields: [
      { key: 'email', type: 'email', label: 'Email',validators: [Validators.required] },
      { key: 'password', type: 'password', label: 'Password',validators: [Validators.required] },
      { key: 'rememberMe', type: 'checkbox', label: 'Remember Me'},
    ],
  },
];
