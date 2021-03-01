import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, SecureLayoutComponent, CreateReservationComponent, MakePaymentComponent],
  imports: [
    CommonModule,
    SecureRoutingModule,
    ReactiveFormsModule
  ]
})
export class SecureModule { }
