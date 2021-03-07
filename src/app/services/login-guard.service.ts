import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuardService {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(isLogging: boolean) {    
    if (this.authservice.loggedIn()) {
      console.log("as");
      return true;
    } else {
      console.log("sa")
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
