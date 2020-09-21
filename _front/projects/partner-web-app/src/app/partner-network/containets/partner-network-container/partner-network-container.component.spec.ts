import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerNetworkContainerComponent } from './partner-network-container.component';

describe('PartnerNetworkContainerComponent', () => {
  let component: PartnerNetworkContainerComponent;
  let fixture: ComponentFixture<PartnerNetworkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerNetworkContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerNetworkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
