import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { environment } from 'src/environments/environment';
import { SingupComponent } from './auth/singup/singup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    AuthComponent,
    SingupComponent,
    SigninComponent,
    OrderComponent,
    SearchComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
