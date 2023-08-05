import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IProductsState, ProductsStore } from '../stores/products.store';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces';

@Injectable()
export class ProductQuery extends QueryEntity<IProductsState> {
  constructor(protected store: ProductsStore) {
    super(store);
  }

  get products$(): Observable<IProduct[] | undefined> {
    return this.selectAll();
  }

  get isLoading$(): Observable<boolean> {
    return this.selectLoading();
  }

  getProductsByIds$(productIds: string[]): Observable<IProduct[]> {
    return this.selectMany(productIds);
  }
}
