import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersContainerComponent } from './advertisers-container.component';

describe('AdvertisersContainerComponent', () => {
  let component: AdvertisersContainerComponent;
  let fixture: ComponentFixture<AdvertisersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
