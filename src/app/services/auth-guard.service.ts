import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authenticateSerivce: AuthenticationService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(this.authenticateSerivce.isAuthenticated() === true){
      return this.authenticateSerivce.isAuthenticated();
    }
    this.router.navigate(['/login']);
  }
}
