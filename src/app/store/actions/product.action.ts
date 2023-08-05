import { Injectable } from '@angular/core';
import { IProductsState, ProductsStore } from '../stores/products.store';
import { IProduct } from '../../interfaces';
import { ProductService } from '../../services';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductAction {
  constructor(
    private productsStore: ProductsStore,
    private productService: ProductService,
  ) {}

  async loadProducts(): Promise<void> {
    const products = await firstValueFrom(this.productService.getProducts());

    this.productsStore.update({ products });
  }

  async addProduct(productName: IProduct['name']): Promise<void> {
    this.productsStore.setLoading(true);

    const product = await firstValueFrom(this.productService.addProduct(productName));

    this.productsStore.update((state: IProductsState) => ({
      products: [
        ...state.products,
        product,
      ],
    }));

    this.productsStore.setLoading(false);
  }

  async editProduct(productId: IProduct['id'], productName: IProduct['name']): Promise<void> {
    this.productsStore.setLoading(true);

    const product = await firstValueFrom(this.productService.editProduct(productId, productName));

    this.productsStore.update((state: IProductsState) => {
      const products = state.products.map((prod) => prod.id === productId ? product : prod);

      return { products };
    });

    this.productsStore.setLoading(false);
  }

  async removeProduct(productId: IProduct['id']): Promise<void> {
    this.productsStore.setLoading(true);

    await firstValueFrom(this.productService.removeProduct(productId));

    this.productsStore.update((store: IProductsState) => ({
      products: store.products.filter(({ id }) => id !== productId),
    }));

    this.productsStore.setLoading(false);
  }
}
