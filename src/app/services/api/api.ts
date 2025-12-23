import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandle } from '../error-handle/error-handle';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
    private baseUrl = environment.baseUrl;
    // private baseUrl = '';
  constructor(
    private http:HttpClient,
  private ErrorHandle:ErrorHandle){

  }

  get<T>(endPoint: string, params?: any): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${endPoint}`, { params })
      .pipe(catchError((err) => this.ErrorHandle.handleErros(err)));
  }

  post<T>(endPoint: string, body: unknown): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}${endPoint}`, body)
      .pipe(catchError((err) => this.ErrorHandle.handleErros(err)));
  }

  put<T>(endPoint: string, body: unknown): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}${endPoint}`, body)
      .pipe(catchError((err) => this.ErrorHandle.handleErros(err)));
  }

  delete<T>(endPoint: string): Observable<T> {
    return this.http
      .delete<T>(`${this.baseUrl}${endPoint}`)
      .pipe(catchError((err) => this.ErrorHandle.handleErros(err)));
  }
}
