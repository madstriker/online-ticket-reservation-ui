import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from 'src/app/share/model/message-response/message-reponse';
import { ReservationDetails } from 'src/app/share/model/reservation/reservation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakePaymentService {

  constructor(private httpClient: HttpClient) { }

  getReservationDetails(userId: string): Observable<ReservationDetails[]>{
    return this.httpClient.get<ReservationDetails[]>(environment.resourceUrl + `/api/v1/reservation/${userId}`);
  }

  makePayment(paymentId: number): Observable<MessageResponse>{
    return this.httpClient.get<MessageResponse>(environment.resourceUrl + `/api/v1/payment/${paymentId}`);
  }
  
}
