import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { sellerPayload } from '../../interFaces/payloads_Interfaces/seller_interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShareData {


  private dataSubject = new BehaviorSubject<any>(null);

  sendData(data: sellerPayload, action: string) {

    this.dataSubject.next({ data: data, action: action });

  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
