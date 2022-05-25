import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingFeaturesSectionComponent } from './amazing-features-section.component';

describe('AmazingFeaturesSectionComponent', () => {
  let component: AmazingFeaturesSectionComponent;
  let fixture: ComponentFixture<AmazingFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingFeaturesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
