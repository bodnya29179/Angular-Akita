import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent, ProductsComponent, CartComponent } from './components';
import { CartFacadeService, ProductFacadeService, ProductService } from './services';
import { CartStore, ProductAction, ProductQuery, ProductsStore, CartAction, CartQuery } from './store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
  ],
  providers: [
    ProductService,
    ProductFacadeService,
    CartFacadeService,
    ProductAction,
    ProductQuery,
    ProductsStore,
    CartAction,
    CartQuery,
    CartStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
