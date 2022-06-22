import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCryptoComponent } from './about-crypto.component';

describe('AboutCryptoComponent', () => {
  let component: AboutCryptoComponent;
  let fixture: ComponentFixture<AboutCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
