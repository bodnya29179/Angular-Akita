import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent, ProductsComponent, CartComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
