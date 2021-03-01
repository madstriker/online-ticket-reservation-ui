import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/secure/service/dashboard/dashboard.service';
import { DashboardDetailModel } from 'src/app/share/model/dashboard/dashboard-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashBoardDetailData : DashboardDetailModel

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
     this.dashboardService.getDailyMetrics().subscribe((data : DashboardDetailModel) =>{
       console.log(data);
        this.dashBoardDetailData = data;
    });
  }
}
