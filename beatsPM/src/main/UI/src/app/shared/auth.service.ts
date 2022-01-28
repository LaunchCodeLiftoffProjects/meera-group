import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostObject } from '../createpost/PostObject';
import { CommentObj } from '../comment/CommentObj';
import { RegisterObject } from '../register/RegisterObject';
import { LoginObject } from '../login/LoginObject';

@Injectable({providedIn:'root'})
export class AuthService {

constructor(private http: HttpClient){}



}
