import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


   login(value: {username: string, password: string}) : Observable<any>{
     console.log(value);
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic cHVibGljOnNlY3JldA==')

   let params = new HttpParams();

   params = params.append('grant_type', 'password');
   params = params.append('username', value.username);
   params = params.append('password', value.password);

   return this.http.post(environment.authServerUrl + `/oauth/token`,null,{
     headers: headers,
     params: params
   });
  }
}
