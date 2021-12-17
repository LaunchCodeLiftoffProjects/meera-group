import { HttpClient, HttpHeaders } from '@angular/common/http';
import { postCreationObject } from './createpost/postCreationObject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:8080/";
 
  constructor(private http: HttpClient) {
  }
 
//    getPosts(): Observable<Posts[]> {
//      console.log('getPosts '+this.baseURL + 'posts')
//      return this.http.get<posts[]>(this.baseURL + 'posts')
//    }
 
  addPost(postCreation:postCreationObject): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(postCreation);
    console.log(body)
    return this.http.post(this.baseURL + 'postCreation', body,{'headers':headers})
  }
 
}