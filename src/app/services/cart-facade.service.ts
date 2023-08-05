import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { CartAction, CartQuery } from '../store';
import { Observable } from 'rxjs';

@Injectable()
export class CartFacadeService {
  constructor(
    private cartAction: CartAction,
    private cartQuery: CartQuery,
  ) {}

  getCartProducts(): Observable<IProduct[]> {
    return this.cartQuery.cartProducts$;
  }

  addToCart(productId: IProduct['id']): void {
    this.cartAction.addToCart(productId);
  }

  removeFromCart(productId: IProduct['id']): void {
    this.cartAction.removeFromCart(productId);
  }
}
