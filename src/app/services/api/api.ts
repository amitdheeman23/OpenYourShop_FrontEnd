import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
    // private baseUrl = environment.apiUrl;
    private baseUrl = '';
  constructor(private http:HttpClient){

  }

  get<T>(endPoint:string,params?:any):Observable<T>{
       return this.http.get<T>(this.baseUrl + endPoint, { params });
  }

  post<T>(endPoint:string,body:any):Observable<T>{
    return this.http.post<T>(this.baseUrl+endPoint,body);
  }
  put<T>(endPoint:string,body:any):Observable<T>{
    return this.http.put<T>(this.baseUrl+endPoint,body)
  }

  delete<T>(endPoint:string):Observable<T>{
    return this.http.delete<T>(this.baseUrl+endPoint)
  }
}
