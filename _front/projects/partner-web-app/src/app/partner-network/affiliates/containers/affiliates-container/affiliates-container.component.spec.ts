import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesContainerComponent } from './affiliates-container.component';

describe('AffiliatesContainerComponent', () => {
  let component: AffiliatesContainerComponent;
  let fixture: ComponentFixture<AffiliatesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
