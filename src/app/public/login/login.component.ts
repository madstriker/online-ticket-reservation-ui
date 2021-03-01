import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';
import {AuthService} from '../../core/service/auth.service';
import {TokenModel} from 'src/app/share/model/token/token';
import { ToastrService } from 'ngx-toastr';
import { ErrorResponse } from 'src/app/share/model/message-response/message-reponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() childMessage;

  constructor(private fb: FormBuilder,private loginService: LoginService, private route: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  onLogin() {

    this.trimFormData();

    if(localStorage.getItem('access_token')){
      localStorage.removeItem('access_token');
    }

      this.loginService.login(this.loginForm.value).subscribe(
        (data : TokenModel) => {
         this.authService.setToken(data.access_token) 
         this.route.navigate(["/home"]);
         this.toastr.success("Login Successfully");
       },
       (error : ErrorResponse) =>{
         console.log(error)
         this.toastr.error(error?.error?.message);
       });
       
  }

  trimFormData() {
    Object.keys(this.loginForm.controls).forEach((key) => {

      if (key !== 'password') {
        this.loginForm.get(key).setValue(this.loginForm.get(key).value.trim())
      }
    });
  }

}
