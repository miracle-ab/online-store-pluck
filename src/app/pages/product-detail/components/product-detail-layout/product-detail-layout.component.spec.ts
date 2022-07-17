import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailLayoutComponent } from './product-detail-layout.component';

describe('ProductDetailLayoutComponent', () => {
  let component: ProductDetailLayoutComponent;
  let fixture: ComponentFixture<ProductDetailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
