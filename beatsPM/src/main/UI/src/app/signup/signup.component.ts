import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';
import { SignUp } from '../shared/auth/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signUp: SignUp = {
    username: '',
    password: '',
    email: ''
  }

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      username: [''],
      password: [''],
      email: ['']
    })
  }

  ngOnInit() { }

  registerUser() {
    this.signUp.username = this.signupForm.controls['username'].value;
    this.signUp.password = this.signupForm.controls['password'].value;
    this.signUp.email = this.signupForm.controls['email'].value;
    this.authService.signUp(this.signUp).subscribe((res) => {
      console.log(res.message);
      if (res.message === "User registered successfully!") {
        console.log(res)
        this.signupForm.reset()
        this.router.navigateByUrl('');
        alert('You have successfully registered. Please log in with provided information with the button at the top right.');
        }
      });
      alert('Something went wrong, please try again.');
    }
}
