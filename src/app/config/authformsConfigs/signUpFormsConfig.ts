import { Validators } from '@angular/forms';
import { StepConfig } from '../../interfaces/interfaces';

export const SIGNUP_FORM: StepConfig[] = [
  {
    stepNumber: 1,
    title: 'Signup',
    fields: [
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [Validators.required, Validators.email],
      },
      {
        key: 'password',
        type: 'password',
        label: 'Password',
        validators: [Validators.required],
      },
      {
        key: 'addresses',
        type: 'array',
        label: 'Addresses',
        forceNewRow: true,
        arrayFields: [
          {
            key: 'city',
            type: 'text',
            label: 'City',
            responsive: { md: 6 },
            validators: [Validators.required],
          },
          {
            key: 'pincode',
            type: 'number',
            label: 'Pincode',
            responsive: { md: 6 },
          },
        ],
      },
    ],
  },
];
