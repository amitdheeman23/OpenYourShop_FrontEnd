import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAddEdit } from './buyer-add-edit';

describe('BuyerAddEdit', () => {
  let component: BuyerAddEdit;
  let fixture: ComponentFixture<BuyerAddEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerAddEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerAddEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
