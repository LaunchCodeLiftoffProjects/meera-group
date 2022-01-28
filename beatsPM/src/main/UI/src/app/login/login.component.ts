import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginObject } from './LoginObject';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObject: LoginObject;
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private api: AuthService)
     { 
      this.loginObject = {
      username: "",
      password: ""
    }
  ;}

  loginUser () {
    this.loginObject.username = this.loginForm.controls['username'].value;
    this.loginObject.password = this.loginForm.controls['password'].value;

    this.api.loginUser(this.loginObject).subscribe((data) => {
      this.router.navigateByUrl('/login');
    }, (error) => {
      throwError(error);
    })
  }
  ngOnInit(): void {
    this.initializeForm();
    this.loginForm = new FormGroup({
      username: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
    });
  };
  
  initializeForm(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
      });
    };
  
  get f() {
    return this.loginForm.controls;
  };


onSubmit(): void {
};


  

  


}