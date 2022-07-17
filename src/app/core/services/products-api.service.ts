import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDetailinterface } from '../interfaces/product-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  public loadBanner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  getListOfProducts(): Observable<ProductDetailinterface[]> {
    return this.http.get<ProductDetailinterface[]>(
      '/assets/configs/goods-mock/index.json'
    );
  }
}
