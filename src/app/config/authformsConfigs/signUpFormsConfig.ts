import { Validators } from '@angular/forms';
import { StepConfig } from '../../interFaces/formsFieldsInterfaces/formsFieldsinterfaces';

// export const SIGNUP_FORM: StepConfig[] = [
//   {
//     stepNumber: 1,
//     title: 'Register',
//     fields: [
//       {
//         key: 'email',
//         type: 'email',
//         label: 'Email',
//         validators: [Validators.required, Validators.email],
//       },
//       {
//         key: 'password',
//         type: 'password',
//         label: 'Password',
//         validators: [Validators.required],
//       },
//       {
//         key: 'addresses',
//         type: 'array',
//         label: 'Addresses',
//         forceNewRow: true,
//         arrayFields: [
//           {
//             key: 'city',
//             type: 'text',
//             label: 'City',
//             // responsive: { md: 6 },
//             validators: [Validators.required],
//           },
//           {
//             key: 'pincode',
//             type: 'number',
//             label: 'Pincode',
//             // responsive: { md: 6 },
//           },
//         ],
//       },
//     ],
//   },
// ];
export const REGISTER_FORM: StepConfig[] = [
  {
    stepNumber: 1,
    title: 'Register',
    fields: [
       {
        key:'profileImage',
        type:'file',
        label:'Upload Image',
        validators:[Validators.required],
        placeholder:'Enter name',
        autocomplete:'off'
      },
      {
        key:'name',
        type:'text',
        label:'Name',
        validators:[Validators.required],
        placeholder:'Enter name',
        autocomplete:'off'
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [Validators.required, Validators.email],
        autocomplete:'off',
          prefixIcon: 'fas fa-envelope'

      },
      {
        key: 'password',
        type: 'password',
        label: 'Password',
        validators: [Validators.required],
        placeholder:'Enter password',
        autocomplete:'off',
        prefixIcon: 'fas fa-key'

      },
      {
        key: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        validators: [Validators.required],
        placeholder:'Enter confirm password',
        prefixIcon: 'fas fa-key'
      },
      {
        key:'role',
        type:'dropdown',
        label:'Role',
        placeholder:'Select role',
        validators:[Validators.required],
        options:[
          {label:'Seller',value:'seller'},
          {label:'Buyer',value:'buyer'},
        ]
      }
    
    ],
  },
];