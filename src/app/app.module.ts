import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent, ProductsComponent, CartComponent } from './components';
import { ProductFacadeService, ProductService } from './services';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
  ],
  providers: [
    ProductService,
    ProductFacadeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
