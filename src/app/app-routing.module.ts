import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService]},
  { path: 'productDetails', component: ProductDetailsComponent},
  { path: '', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
