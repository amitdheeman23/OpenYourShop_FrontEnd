import { Component } from '@angular/core';
import { DynamicForm } from '../../dynamicForm/dynamic-form/dynamic-form';
import { FormGroup } from '@angular/forms';
import { FormFactory } from '../../../../services/form_factory/form-factory';
import { FORGOT_FORM } from '../../../../formsConfigs/formsConfigs';

@Component({
  selector: 'app-forgot',
  imports: [DynamicForm],
  templateUrl: './forgot.html',
  styleUrl: './forgot.scss',
})
export class Forgot {
StepConfig = FORGOT_FORM;
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
