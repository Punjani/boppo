import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

export class AuthenticationService {

  constructor() { }

  private isLoggedIn = false;
  login(): any{
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  isAuthenticated(): any{
    return this.isLoggedIn;
  }

}
