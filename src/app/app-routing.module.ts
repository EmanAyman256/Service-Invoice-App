import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ExecutionOrderComponent } from './execution-order/execution-order.component';
import { ServiceInvoiceComponent } from './service-invoice/service-invoice.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {path:'signup',component:RegisterComponent},
  { path: 'service-invoice', component: ServiceInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
