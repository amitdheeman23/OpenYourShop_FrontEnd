import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from '../../Admin/components/dynamicForm/dynamic-form/dynamic-form';
import { LOGIN_FORM } from '../../config/authformsConfigs/loginFormConfig';
import { REGISTER_FORM } from '../../config/authformsConfigs/signUpFormsConfig';
import { Auth } from '../auth/auth';
import { API_ENDPOINTS } from '../../services/api/api-endpoints';
import { Common } from '../../services/common/common';
import { LoginPayload, registerPayload } from '../../interFaces/payloads_Interfaces/authPayloadInterfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DynamicForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  action: 'login' | 'register' = 'login';
  formConfig = LOGIN_FORM;

  constructor(
    private router: Router,
    private authService: Auth,
    private commonService: Common) { }

  ngOnInit(): void {
    console.log('StepConfig ===>', this.formConfig);
  }

  login(data: any): void {
    console.log(
      this.action === 'login' ? 'LOGIN DATA 👉' : 'REGISTER DATA 👉',
      data
    );

    // TODO: API call
    if (this.action === 'register') {
      const formData = new FormData();
      // formData.append('name', data.name);
      // formData.append('email', data.email);
      // formData.append('password', data.password);
      // // formData.append('confirmPassword', data.confirmPassword);
      // formData.append('role', data.role);





      if (data.profileImage) {
        formData.append(
          'image',
          data.profileImage   // 👈 File object
        );

        this.commonService.uploadImage(API_ENDPOINTS.upload.image, formData).subscribe((res: any) => {
          console.log('res--->>>>', res);

          if (res.url) {
            const payload: registerPayload = {
              name: data.name,
              email: data.email,
              password: data.password,
              role: data.role,
              profileImage: res.url,
            };
            this.authService.register<registerPayload>(API_ENDPOINTS.auth.register, payload).subscribe((res: any) => {
              console.log('resres', res);


            })
          }


        })
      }


    }
    if (this.action === 'login') {
      let payload: LoginPayload = {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe
      }

      console.log('asdaddasdas', this.action);

      this.authService
        .login<LoginPayload>(API_ENDPOINTS.auth.login, payload)
        .subscribe({
          next: (res) => {
            console.log('Login Success', res);
          },
          error: () => {
            // error already handled in ErrorHandle service
          },
        });
    }
  }



  switchAction() {
    this.action = this.action === 'login' ? 'register' : 'login';
    this.formConfig =
      this.action === 'login' ? LOGIN_FORM : REGISTER_FORM;
  }
}