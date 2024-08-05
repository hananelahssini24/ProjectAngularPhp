import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductformComponent } from './Components/productform/productform.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

const routes: Routes = [
  {path:"product-list",component:ProductListComponent},
  {path: 'create-product', component: ProductformComponent},
  {path: 'update-product/:productId', component: ProductformComponent},
  {path: 'view-product-details/:productId', component: ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
