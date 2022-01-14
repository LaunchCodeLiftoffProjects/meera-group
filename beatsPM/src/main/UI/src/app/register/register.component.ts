import { Component, OnInit } from '@angular/core';
import {RegisterObject} from './RegisterObject';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerObject: RegisterObject;

  
  constructor() { }

  ngOnInit(): void {
  }





}
