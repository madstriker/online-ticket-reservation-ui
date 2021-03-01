import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationModel } from 'src/app/share/model/location/location-model';
import { ReservationService } from '../service/reservation/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { MessageResponse } from 'src/app/share/model/message-response/message-reponse';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {

  reservationForm: FormGroup;
  locationList: LocationModel[];
 

  constructor(private fb: FormBuilder, private route: Router, private reservationService: ReservationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getLocationList();
  }


  buildForm() {
    this.reservationForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      travelDate: ['', [Validators.required]],
      locationId: ['', Validators.required]
    });
  }

  getLocationList(): void {
    this.reservationService.getLocationList().subscribe((data: LocationModel[])=> {
      this.locationList = data;
    })

  }


  onSubmit() {
     if(this.reservationForm.valid){ 
        this.reservationService.createReservation(this.reservationForm.value).subscribe((data : MessageResponse)=>{
        this.reservationForm.reset();
        this.toastr.success(data.message);  
    })
  }
}

}
