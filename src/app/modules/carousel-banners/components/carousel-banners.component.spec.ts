import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBannersComponent } from './carousel-banners.component';

describe('CarouselBannersComponent', () => {
  let component: CarouselBannersComponent;
  let fixture: ComponentFixture<CarouselBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselBannersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
