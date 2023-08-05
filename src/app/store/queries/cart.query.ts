import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartStore, ICartState } from '../stores/cart.store';
import { Observable, of, switchMap } from 'rxjs';
import { IProduct } from '../../interfaces';
import { ProductQuery } from './product.query';

@Injectable()
export class CartQuery extends Query<ICartState> {
  constructor(
    protected store: CartStore,
    private productQuery: ProductQuery
  ) {
    super(store);
  }

  get cartProducts$(): Observable<IProduct[]> {
    return this.select('productIds')
      .pipe(
        switchMap((productIds: string[]) => {
          return productIds.length ? this.productQuery.getProductsByIds$(productIds) : of([]);
        }),
      );
  }
}
