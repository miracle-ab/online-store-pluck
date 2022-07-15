import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuLayoutComponent } from './nav-menu-layout.component';

describe('NavMenuLayoutComponent', () => {
  let component: NavMenuLayoutComponent;
  let fixture: ComponentFixture<NavMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
