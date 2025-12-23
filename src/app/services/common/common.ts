import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  

  constructor(private apiService:Api){

  }

  uploadImage(endPoint:string,imageUrl:any):Observable<any>{
    return this.apiService.post(endPoint,imageUrl);
  }
}
