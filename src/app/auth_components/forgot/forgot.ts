import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicForm } from '../../Admin/components/dynamicForm/dynamic-form/dynamic-form';
import { FormFactory } from '../../services/form_factory/form-factory';
import { LOGIN_FORM } from '../../config/authformsConfigs/loginFormConfig';

@Component({
  selector: 'app-forgot',
  imports: [DynamicForm],
  templateUrl: './forgot.html',
  styleUrl: './forgot.scss',
})
export class Forgot {
StepConfig = LOGIN_FORM;
  form!: FormGroup;

  constructor(private formFactory: FormFactory) {
  }
  ngOnInit(): void {
    console.log('StepConfig===',this.StepConfig);
    
  }

  forGot(data: any): void {
    console.log('Forgot DATA 👉', data);
    // yahan API call aayegi
  }
}
