import { Component, OnInit } from '@angular/core';
import { RegisterObject } from './RegisterObject';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerObject: RegisterObject;
  registerForm!: FormGroup;

  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private api: ApiService
  ) { 
    this.registerObject = {
      email: "",
      username: "",
      password: "",
      verifyPassword: ""
    }
  }

  addUser () {
    this.registerObject.email = this.registerForm.controls['email'].value;
    this.registerObject.username = this.registerForm.controls['username'].value;
    this.registerObject.password = this.registerForm.controls['password'].value;
    this.registerObject.verifyPassword = this.registerForm.controls['verifyPassword'].value;

    this.api.addUser(this.registerObject).subscribe((data: any) => {
      this.router.navigateByUrl('/register');
    }, (error: any) => {
      throwError(error);
    })
  }
  ngOnInit(): void {
    this.initializeForm();
    this.registerForm = new FormGroup({
      email: new FormControl('',  Validators.required),
      username: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
      verifyPassword: new FormControl('', Validators.required)
    });
  };
  
  initializeForm(): void {
    this.registerForm = this.fb.group({
      email: '',
      username: '',
      password: '',
      verifyPassword: ''
      });
    };
  
  get f() {
    return this.registerForm.controls;
  };


onSubmit(): void {
};




}
