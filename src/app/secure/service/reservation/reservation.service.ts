import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationModel } from 'src/app/share/model/location/location-model';
import {ReservationModel} from 'src/app/share/model/reservation/reservation'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getLocationList(): Observable<LocationModel[]> {
   return this.httpClient.get<LocationModel[]>(environment.resourceUrl + `/api/v1/location`);
  }

  createReservation(reservation: ReservationModel): Observable<any> {
    return this.httpClient.post<string>(environment.resourceUrl + `/api/v1/reservation/location/${reservation.locationId}`,reservation);
   }

}
