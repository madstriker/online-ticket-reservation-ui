import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/service/auth.service';
import { MessageResponse } from 'src/app/share/model/message-response/message-reponse';
import { ReservationDetails } from 'src/app/share/model/reservation/reservation';
import { MakePaymentService } from '../service/make-payment/make-payment.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  private userId: string;
  reservationDetails: ReservationDetails[];
  constructor(private authService: AuthService, private makePaymentService: MakePaymentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserIdAndReservationDetails();
  }

  getUserIdAndReservationDetails(): void {
    this.userId = this.authService.getUserId();
    this.makePaymentService.getReservationDetails(this.userId).subscribe((data: ReservationDetails[])=> {
      this.reservationDetails = data;
    })  

  }

  makePayment(paymentId: number): void {
    this.makePaymentService.makePayment(paymentId).subscribe((data: MessageResponse) => {
      this.getUserIdAndReservationDetails();
      this.toastr.success(data.message);
    })
  }
}
