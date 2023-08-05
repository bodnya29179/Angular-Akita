import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ICartState {
  productIds: string[];
}

function createInitialState(): ICartState {
  return {
    productIds: [],
  };
}

@StoreConfig({
  name: 'cart',
})
@Injectable()
export class CartStore extends Store<ICartState> {
  constructor() {
    super(createInitialState());
  }
}
