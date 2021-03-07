import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MyToastrService } from './my-toastr.service';
import { UserLogin } from '../models/userLogin';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  jwtHelper: JwtHelperService = new JwtHelperService();
  currentUser: any;
  constructor(
    private http: HttpClient,
    private toast: MyToastrService,
    private route: Router
  ) {}

  login(user: UserLogin) {
    this.http
      .post(environment.URL + '/Auth/login', user, this.httpOptions)
      .subscribe(
        (data) => {
          var tokenData: any = data;
          this.saveToken(tokenData.token.toString());

          console.log(localStorage.getItem(environment.TOKEN_KEY));

          this.route.navigateByUrl('/dashboard');
        },
        (error) => {
          console.log(error);
          this.toast.error(error.error);
        }
      );
  }

  register(user: any) {
    this.http
      .post(environment.URL + '/Auth/register', user, this.httpOptions)
      .subscribe(
        (data) => {
          this.toast.success(
            'Kayıt olma işlemi başarılı !'
          );
          this.route.navigateByUrl('/login');
        },
        (error) => {
          console.log(error);
          this.toast.error(error.error.message[0]);
        }
      );
  }

  logOut() {
    localStorage.clear();
    localStorage.removeItem(environment.TOKEN_KEY);
    this.route.navigateByUrl('/login');
  }

  loggedIn() {
    return localStorage.getItem(environment.TOKEN_KEY) !== null;
  }

  public saveToken(token: string) {
    localStorage.setItem(environment.TOKEN_KEY, token);
  }
}
