import { Component, OnInit } from '@angular/core';
import { StepConfig } from '../../../interfaces/interfaces';
import { DynamicForm } from '../../dynamicForm/dynamic-form/dynamic-form';
import { FormFactory } from '../../../services/form_factory/form-factory';
import { SIGNUP_FORM,LOGIN_WIZARD_STEPS } from '../../../formsConfigs/formsConfigs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [DynamicForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{

StepConfig = LOGIN_WIZARD_STEPS;
  form!: FormGroup;

  constructor(private formFactory: FormFactory) {
  }
  ngOnInit(): void {
    console.log('StepConfig===',this.StepConfig);
    
  }

  login(data: any): void {
    console.log('LOGIN DATA 👉', data);
    // yahan API call aayegi
  }
}
