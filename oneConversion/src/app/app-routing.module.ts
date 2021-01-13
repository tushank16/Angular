import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";

const routes: Routes = [
  { path: '', redirectTo: 'product-view', pathMatch: 'full'},
  {  path:'admin', component:AdminGuardGuard, canActivate: [AdminGuardGuard]},
  { path: 'task', component: TasksComponent}, // Redirecting Routes

  { path: 'prod', 
    children: [
      { path: 'view',component: ProductViewComponent},
      { path: 'edit',component: ProductEditComponent},
      { path: 'view/:id',component: ProductIdComponent},
      
    ]
  },

  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  
  { path: 'products', component: ProductsComponent},
  { path: 'product-view', component: ProductViewComponent},
  { path: 'product-edit', component: ProductEditComponent},
  { path: 'product-id/:id', component: ProductIdComponent},
  { path: 'order/:id', component: OrderViewComponent},
  { path: 'orders', loadChildren: ()=> import('./orders/orders.module').then(m=> m.OrdersModule)},
  { path: '**', component: PageNotFoundComponent}, // Wildcard Routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
