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

  addUser(registerObject: RegisterObject, ) {
      // throw new Error('Method not implemented.');
      return this.http.post('http://localhost:8080/register', registerObject)
    }

  loginUser(loginObj: LoginObject): Observable<any>{
          return this.http.get('http://localhost/8080/login')
        }

}
