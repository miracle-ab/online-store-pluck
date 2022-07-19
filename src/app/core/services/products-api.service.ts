import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDetailInterface } from '../interfaces/product-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  public loadBanner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  getListOfProducts(): Observable<ProductDetailInterface[]> {
    return this.http.get<ProductDetailInterface[]>(
      '/assets/configs/goods-mock/index.json'
    );
  }

  getProduct(id: string): Observable<ProductDetailInterface> {
    return this.http.get<ProductDetailInterface>(
      `/assets/configs/goods-mock/${id}.json`
    );
  }
}
