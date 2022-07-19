import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-menu-layout',
  templateUrl: './nav-menu-layout.component.html',
  styleUrls: ['./nav-menu-layout.component.scss'],
})
export class NavMenuLayoutComponent implements OnInit {
  @Input() productsQuantity$: Observable<number>;

  constructor() {}

  ngOnInit(): void {}
}
