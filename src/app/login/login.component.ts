import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userDetails = {
    username : null,
    password : null
  };
  constructor(private authenticateService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.authenticateService.login()){
      this.router.navigate(['/products']);
    }
  }

}
