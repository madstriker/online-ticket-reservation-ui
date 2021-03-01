import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardDetailModel } from 'src/app/share/model/dashboard/dashboard-model';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }


  getDailyMetrics(): Observable<DashboardDetailModel>{
    const userId = this.auth.getUserId();
    return this.httpClient.get<DashboardDetailModel>(environment.resourceUrl + `/api/v1/dashboard/${userId}`);
  }
}
