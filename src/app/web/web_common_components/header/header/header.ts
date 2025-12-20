import { Component } from '@angular/core';
import { DynamicForm } from '../../../../Admin/components/dynamicForm/dynamic-form/dynamic-form';
import { LOGIN_FORM } from '../../../../config/authformsConfigs/loginFormConfig';
import { REGISTER_FORM } from '../../../../config/authformsConfigs/signUpFormsConfig';
declare var $:any;
@Component({
  selector: 'app-header',
  imports: [DynamicForm],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  formConfig=LOGIN_FORM;
  action:'login'|'register'='login'

  openModal(){
    $('#loginModal').modal('show');
  }
switchAction() {
  this.formConfig=[];
  this.action = this.action === 'login' ? 'register' : 'login';
  this.formConfig =
    this.action === 'login' ? LOGIN_FORM : REGISTER_FORM;
    console.log('formConfigformConfig',this.formConfig);
    
}

  login(data: any): void {
    console.log('LOGIN DATA 👉', data);


  }

closeModal() {
  this.formConfig=[];

  $('#loginModal').modal('hide');
}


}
