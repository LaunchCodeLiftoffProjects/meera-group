import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostObject } from '../createpost/PostObject';
 
@Injectable({providedIn:'root'})
export class ApiService {

    constructor(private http: HttpClient){}

    createPost(postObj: PostObject): Observable<any> {
        return this.http.post('http://localhost:8080/add/', postObj);
      }
      
}