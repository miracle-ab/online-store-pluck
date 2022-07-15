import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetailinterface } from '../interfaces/product-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  getListOfProducts(): Observable<ProductDetailinterface[]> {
    return this.http.get<ProductDetailinterface[]>(
      '/assets/configs/goods-mock/index.json'
    );
  }
}
