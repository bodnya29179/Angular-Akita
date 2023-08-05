import { IProduct } from '../../interfaces';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface IProductsState extends EntityState<IProduct, string> {}

@StoreConfig({
  name: 'products',
  idKey: 'id',
})
@Injectable()
export class ProductsStore extends EntityStore<IProductsState> {
  constructor() {
    /* If we want to pass init values, we can do it here: { <field>: <init value> } */
    super(/* <here> */);
  }
}
