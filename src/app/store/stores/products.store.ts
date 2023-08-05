import { IProduct } from '../../interfaces';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface IProductsState {
  products: IProduct[] | undefined;
}

function createInitialState(): IProductsState {
  return {
    products: undefined,
  };
}

@StoreConfig({
  name: 'products',
  idKey: 'id',
})
@Injectable()
export class ProductsStore extends Store<IProductsState> {
  constructor() {
    super(createInitialState());
  }
}
