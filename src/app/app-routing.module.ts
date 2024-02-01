import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductsComponent} from "./components/pages/products/products.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'pizzas', redirectTo: 'products'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
