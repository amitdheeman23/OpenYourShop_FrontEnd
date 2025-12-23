import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { REGISTER_FORM } from '../../../../../config/authformsConfigs/signUpFormsConfig';
import { DynamicForm } from '../../../dynamicForm/dynamic-form/dynamic-form';
import { ShareData } from '../../../../../services/share_data/share-data';

@Component({
  selector: 'app-seller-add-edit',
  standalone: true,
  imports: [DynamicForm],
  templateUrl: './seller-add-edit.html',
  styleUrl: './seller-add-edit.scss',
})
export class SellerAddEdit implements OnInit {
  formConfig = REGISTER_FORM;
  private shareData=inject(ShareData);

  ngOnInit(): void {
    this.shareData.getData().subscribe((res:any)=>{
        console.log('res===>>>>',res);
        
    })

  }
}
