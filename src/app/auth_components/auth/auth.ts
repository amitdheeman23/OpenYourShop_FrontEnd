import { Component, inject } from '@angular/core';
import { Login } from '../login/login';
import { Footer } from '../../Admin/components/common_components/footer/footer';
import { Api } from '../../services/api/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  imports: [Login,Footer],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

  private apiService=inject(Api);


  login<T>(endPoint: string, payload: unknown): Observable<T> {
    return this.apiService.post<T>(endPoint, payload);
  }

  register<T>(endPoint: string, payload: unknown): Observable<T> {
    return this.apiService.post<T>(endPoint, payload);
  }
}
