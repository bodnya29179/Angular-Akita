import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces';
import { CartFacadeService, ProductFacadeService } from '../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(
    private productFacade: ProductFacadeService,
    private cartFacade: CartFacadeService,
  ) {}

  ngOnInit() {
    this.productFacade.loadProducts();
    this.products$ = this.productFacade.getProducts();
  }

  editProduct({ id, name }: IProduct): void {
    this.productFacade.editProduct(id, name);
  }

  deleteProduct(productId: IProduct["id"]): void {
    this.productFacade.removeProduct(productId);
  }

  addToCart(productId: IProduct['id']): void {
    this.cartFacade.addToCart(productId);
  }
}
