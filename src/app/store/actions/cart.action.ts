import { Injectable } from '@angular/core';
import { CartStore, ICartState } from '../stores/cart.store';

@Injectable()
export class CartAction {
  constructor(private cartStore: CartStore) {}

  addToCart(productId: string): void {
    this.cartStore.update((state: ICartState) => ({
      productIds: state.productIds.includes(productId)
        ? state.productIds
        : [...state.productIds, productId],
    }));
  }

  removeFromCart(productId: string): void {
    this.cartStore.update((state: ICartState) => ({
      productIds: state.productIds.filter((id: string) => id !== productId),
    }));
  }
}
