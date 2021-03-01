import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';

const routes: Routes = [
  {
    path:"", component:SecureLayoutComponent,
    children:[
      {
        path:"", component:DashboardComponent
      },
      {
        path:"reservation", component:CreateReservationComponent
      },
      {
        path:"payment", component:MakePaymentComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
