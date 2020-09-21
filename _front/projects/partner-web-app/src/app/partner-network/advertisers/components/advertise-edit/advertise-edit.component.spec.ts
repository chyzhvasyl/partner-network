import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseEditComponent } from './advertise-edit.component';

describe('AdvertiseEditComponent', () => {
  let component: AdvertiseEditComponent;
  let fixture: ComponentFixture<AdvertiseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
