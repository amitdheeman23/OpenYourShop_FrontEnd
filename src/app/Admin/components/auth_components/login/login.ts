import { Component, OnInit } from '@angular/core';
import { DynamicForm } from '../../dynamicForm/dynamic-form/dynamic-form';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_WIZARD_STEPS } from '../../../../formsConfigs/formsConfigs';

@Component({
  selector: 'app-login',
  imports: [DynamicForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{

StepConfig = LOGIN_WIZARD_STEPS;
  form!: FormGroup;

  constructor(
    private router:Router) {
  }
  ngOnInit(): void {
    console.log('StepConfig===',this.StepConfig);
    
  }

  login(data: any): void {
    console.log('LOGIN DATA 👉', data);
    this.router.navigate(['/home'])
    // yahan API call aayegi
  }
}
