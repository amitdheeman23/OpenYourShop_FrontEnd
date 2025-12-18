import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddEdit } from './seller-add-edit';

describe('SellerAddEdit', () => {
  let component: SellerAddEdit;
  let fixture: ComponentFixture<SellerAddEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAddEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAddEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
