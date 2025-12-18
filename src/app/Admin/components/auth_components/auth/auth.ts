import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Footer } from '../../common_components/footer/footer';

@Component({
  selector: 'app-auth',
  imports: [Login,Footer],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

}
