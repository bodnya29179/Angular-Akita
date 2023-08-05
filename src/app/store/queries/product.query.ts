import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IProductsState, ProductsStore } from '../stores/products.store';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces';

@Injectable()
export class ProductQuery extends Query<IProductsState> {
  constructor(protected store: ProductsStore) {
    super(store);
  }

  get products$(): Observable<IProduct[] | undefined> {
    return this.select('products');
  }

  get isLoading$(): Observable<boolean> {
    return this.selectLoading();
  }

  getProductsByIds$(productIds: string[]): Observable<IProduct[]> {
    return this.select((state: IProductsState) => {
      return state.products.filter(({ id }) => productIds.includes(id));
    });
  }
}
