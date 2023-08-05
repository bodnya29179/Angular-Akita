import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { filter, Observable } from 'rxjs';
import { ProductAction, ProductQuery } from '../store';

@Injectable()
export class ProductFacadeService {
  constructor(
    private productAction: ProductAction,
    private productQuery: ProductQuery,
  ) {}

  loadProducts(): void {
    this.productAction.loadProducts();
  }

  getProducts(): Observable<IProduct[]> {
    return this.productQuery.products$
      .pipe(filter(Boolean));
  }

  addProduct(productName: IProduct['name']): void {
    this.productAction.addProduct(productName);
  }

  editProduct(productId: IProduct['id'], productName: IProduct['name']): void {
    this.productAction.editProduct(productId, productName);
  }

  removeProduct(productId: IProduct['id']): void {
    this.productAction.removeProduct(productId);
  }
}
