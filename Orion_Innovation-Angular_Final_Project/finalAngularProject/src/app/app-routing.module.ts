import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { CartComponent } from './cart/cart.component';
import { LoginGuard } from './login.guard';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', component: ProductsComponent, canActivate: [LoginGuard]},
  { path: 'products', component: ProductsComponent, canActivate: [LoginGuard]},
  { path: 'products/:id', component: ProductComponent, canActivate: [LoginGuard]},
  { path: 'cart', component: CartComponent, canActivate: [LoginGuard]},
  { path: 'signup', component: SingupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'order', component: OrderComponent, canActivate: [LoginGuard]},
  { path: 'search/searchTerm', component: ProductsComponent, canActivate: [LoginGuard]},
  { path: 'adminpanel', component: AdminpanelComponent, canActivate: [LoginGuard, AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
