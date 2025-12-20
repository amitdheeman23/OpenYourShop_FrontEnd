import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loader {

  private loading$=new BehaviorSubject<boolean>(false);
  loadingStatus$=this.loading$.asObservable();
  show(){
    this.loading$.next(true);

  }
  hide(){
    this.loading$.next(false);
  }
  
  
}
