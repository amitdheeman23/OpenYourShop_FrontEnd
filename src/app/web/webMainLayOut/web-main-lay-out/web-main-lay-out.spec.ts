import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMainLayOut } from './web-main-lay-out';

describe('WebMainLayOut', () => {
  let component: WebMainLayOut;
  let fixture: ComponentFixture<WebMainLayOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebMainLayOut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebMainLayOut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
