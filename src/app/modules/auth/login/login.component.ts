import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginPayload } from 'src/app/shared/models/auth/login-payload';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // isLoginError = false;
  loginPay: LoginPayload;

  loginForm: FormGroup = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl('')
  });

  constructor(private service: AuthService, private router: Router  ) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    this.loginPay = this.loginForm.value;
    console.log(this.loginPay);
    this.service.login(this.loginPay)
    .subscribe(data => {
      localStorage.setItem('token', data);
      this.router.navigate(['/admin']);
     },
    error => {
      console.log(error);
  });

  }

}
