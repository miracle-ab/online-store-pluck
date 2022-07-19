import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetailInterface } from '../interfaces/product-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartApiService {
  constructor() {}

  public items: ProductDetailInterface[] = [];

  getItems() {
    return new BehaviorSubject(this.items);
  }

  getItemQuantity(id: string) {
    this.loadCart();
    var fetchdata = this.items.filter((m) => m.id == id);
    if (fetchdata.length > 0) {
      return new BehaviorSubject(fetchdata[0].quantity);
    } else {
      return new BehaviorSubject(0);
    }
  }

  getItemsQuantity() {
    this.loadCart();
    let itemsQuantity: number = 0;
    this.items.forEach((product) => {
      itemsQuantity += product.quantity;
    });
    return new BehaviorSubject(itemsQuantity);
  }

  loadCart(): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems !== null) {
      this.items = JSON.parse(cartItems);
    } else {
      this.items = [];
    }
  }

  saveCart(items: any): void {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cartItems');
  }

  addQuantityItemToCart(product: ProductDetailInterface) {
    this.loadCart();
    var fetchdata = this.items.filter((m) => m.id == product.id);
    var previousCartItems = this.items;

    if (fetchdata.length > 0) {
      var addQntProduct = previousCartItems.filter(
        (d) => d.id == fetchdata[0].id
      );
      var index = previousCartItems.findIndex((d) => d.id == fetchdata[0].id);
      if (addQntProduct.length > 0) {
        var cartItem: any = {
          ...product,
          quantity: fetchdata[0].quantity + 1,
        };
        previousCartItems[index] = cartItem;
      }
    } else {
      var cartItem: any = {
        ...product,
        quantity: 1,
      };
      previousCartItems.push(cartItem);
    }
    this.saveCart(previousCartItems);
  }

  removeQuantityItemFromCart(product: ProductDetailInterface) {
    this.loadCart();

    var fetchdata = this.items.filter((m) => m.id == product.id);
    var previousCartItems = this.items;
    var removeQntProduct = previousCartItems.filter(
      (d) => d.id == fetchdata[0].id
    );
    var index = previousCartItems.findIndex((d) => d.id == fetchdata[0].id);

    if (removeQntProduct?.length > 0 && fetchdata[0].quantity > 1) {
      var cartItem: any = {
        ...product,
        quantity: fetchdata[0].quantity - 1,
      };
      previousCartItems[index] = cartItem;
    } else {
      previousCartItems.splice(index, 1);
    }
    this.saveCart(previousCartItems);
  }

  deleteItemFromCart(product: ProductDetailInterface) {
    this.loadCart();

    var fetchdata = this.items.filter((m) => m.id == product.id);
    var previousCartItems = this.items;
    var index = previousCartItems.findIndex((d) => d.id == fetchdata[0].id);

    if (index > -1) {
      previousCartItems.splice(index, 1);
      this.saveCart(previousCartItems);
    }
  }
}
