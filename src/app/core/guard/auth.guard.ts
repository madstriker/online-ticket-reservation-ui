import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    const accesToken = this.authService.haveToken();
    if(accesToken){
      console.log(" logged in ");
      return true;
    }
    console.log("Not logged in ");
    this.router.navigate(['']);
    return false;
  }

  
  
}
