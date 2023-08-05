import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$: Observable<IProduct[]>;
}
