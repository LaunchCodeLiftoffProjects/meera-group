import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostObject } from '../createpost/PostObject';

@Injectable({providedIn:'root'})
export class ApiService {
    status: any;

    constructor(private http: HttpClient){}

    createPost(postObj: PostObject): Observable<any> {
        return this.http.post('http://localhost:8080/add', postObj);
      }

    getAllPosts(): Observable<Array<PostObject>> {
        return this.http.get<Array<PostObject>>('http://localhost:8080/forum');
      }

     deletePost(Id: number): void{
        console.log("this is the apiservice checker");
        console.log(Id);
        this.http.delete('http://localhost:8080/forum/' + Id).subscribe(() => this.status = 'Delete successful');
        console.log('it was maybe deleted?')
     }

}
