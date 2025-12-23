import { Validators } from '@angular/forms';
import { StepConfig } from '../../interFaces/formsFieldsInterfaces/formsFieldsinterfaces';

export const FORGOT_FORM: StepConfig[] = [
  {
    stepNumber: 1,
    title: 'Forgot',
    fields: [
      { key: 'email', type: 'email', label: 'Email',placeholder:'Enter Registered email id',validators: [Validators.required] },

    ],
  },
];