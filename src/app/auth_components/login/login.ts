import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from '../../Admin/components/dynamicForm/dynamic-form/dynamic-form';
import { LOGIN_FORM } from '../../config/authformsConfigs/loginFormConfig';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DynamicForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  steps = LOGIN_FORM;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('StepConfig ===>', this.steps);
  }

  login(data: any): void {
    console.log('LOGIN DATA 👉', data);

    // API call yahan aayegi
    this.router.navigate(['/home']);
  }
}
