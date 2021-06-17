import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneComponent } from './mobile-phone.component';

describe('MobilePhoneComponent', () => {
  let component: MobilePhoneComponent;
  let fixture: ComponentFixture<MobilePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
