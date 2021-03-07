import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      var kullaniciGirisDto = Object.assign({}, this.loginForm.value);

      this.authService.login(kullaniciGirisDto);      
    }
     else {
      this.toastr.error('Lütfen kullanıcı bilgilerini kontrol ediniz.');
    }
  }
}
