import { Injectable } from '@angular/core';
import { User } from '../user';
import { SignUp } from './signup';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  signUp(signUp:SignUp): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signup', signUp)
        .pipe(
          catchError(this.handleError)
        )
  }
  //haha
  signIn(user:User){
    return this.http.post<any>(`http://localhost:8080/api/auth/signin`, user)
          .subscribe((res: any) => {
            localStorage.setItem('access_token', res.token)
            this.getUserProfile(res.id).subscribe((res) => {
              this.currentUser = res;
              this.router.navigate(['/']);
            })
          })
  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
      let removeToken = localStorage.removeItem('access_token');
      if(removeToken == null) {
      // this.router.navigateByUrl()
      }
      console.log('this is within logout function in authservice');
  }

  getUserProfile(id: String | null): Observable<any> {
      let api = `http://localhost:8080/users/${id}`;
      return this.http.get(api, { headers: this.headers }).pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
    }

  handleError(error: HttpErrorResponse){
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        msg = error.error.message;
      } else {
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }
}
