import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  
  constructor(
    private apiService:Api
  ){

  }

  getSeller<T>():Observable<T>{
    return this.apiService.get<T>(API_ENDPOINTS.seller.list);
  }

  //   login<T>(endPoint: string, payload: unknown): Observable<T> {
  //   return this.apiService.post<T>(endPoint, payload);
  // }
}
