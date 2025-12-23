import { Component } from '@angular/core';
import { Seller } from '../../../../services/seller/seller';
import { CommonModule, DatePipe } from '@angular/common';
import { SellerActionType, sellerPayload } from '../../../../interFaces/payloads_Interfaces/seller_interfaces';
import { Router } from '@angular/router';
import { ShareData } from '../../../../services/share_data/share-data';

@Component({
  selector: 'app-seller-list',
  imports: [CommonModule],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.scss',
  providers:[DatePipe]
})
export class SellerList {
sellerList:any[]=[];
  constructor(
    private SellerService:Seller,
    private router:Router,
    private shareDataService:ShareData
  ){
    this.getSellerList();
  }

  getSellerList(){
    this.SellerService.getSeller().subscribe((res:any)=>{
      console.log('res---',res);
      if(res.sellerList.length>0){
        this.sellerList=res.sellerList;
      }else{
        this.sellerList=[];
      }
      
    })
  }

// navigateTo(
//   data: any,
//   action: SellerActionType
// ): void {
//   console.log('data ===', data);

//   this.router.navigate(['/admin/seller', action,data]
//   );
// }

navigateTo(data:any,type:string){
  this.shareDataService.sendData(data,type);
  this.router.navigate([`/admin/seller/${type}`])
}


}
