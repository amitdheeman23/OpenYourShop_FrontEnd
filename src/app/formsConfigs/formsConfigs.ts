import { Validators } from '@angular/forms';
import { StepConfig } from '../interfaces/interfaces';

/* 🔹 SINGLE SIGNUP FORM */
export const SIGNUP_FORM: StepConfig = {
  stepNumber: 1,
  title: 'Signup',
  fields: [
    {
      key: 'email',
      type: 'email',
      label: 'Email',
      placeholder:'Enter email id.',
      validators: [Validators.required, Validators.email],
    },
    {
      key: 'password',
      type: 'password',
      label: 'Password',
      placeholder:'Enter password.',
      validators: [Validators.required],
    },
    {
      key: 'addresses',
      type: 'array',
      label: 'Addresses',
      arrayFields: [
        {
          key: 'city',
          type: 'text',
          label: 'City',
          placeholder:"Enter city name",
          validators: [Validators.required],
        },
        {
          key: 'pincode',
          type: 'number',
          label: 'Pincode',
          placeholder:'Enter pin code'
        },
      ],
    },
  ],
};

/* 🔹 WIZARD LOGIN */
export const LOGIN_WIZARD_STEPS: StepConfig[] = [
  {
    stepNumber: 1,
    title: 'Login',
    fields: [
      {
        key: 'email',
        type: 'email',
        label: 'Email',
      placeholder:'Enter email id.',
        validators: [Validators.required],
      },
      {
        key: 'password',
        type: 'password',
        label: 'Password',
      placeholder:'Enter password.',

        validators: [Validators.required],
      },
    ],
  },
  {
    stepNumber: 2,
    title: 'Verify OTP',
    fields: [
      {
        key: 'otp',
        type: 'number',
        label: 'OTP',
        validators: [Validators.required],
      },
    ],
  },
];
