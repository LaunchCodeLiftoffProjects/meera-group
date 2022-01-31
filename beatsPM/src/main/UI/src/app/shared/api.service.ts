import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostObject } from '../createpost/PostObject';
import { CommentObj } from '../comment/CommentObj';


@Injectable({providedIn:'root'})
export class ApiService {
//   addUser(registerObject: RegisterObject, ) {
//     // throw new Error('Method not implemented.');
//     return this.http.post('http://localhost:8080/register', registerObject)
//   }
    status: any;

    constructor(private http: HttpClient){}

    //http post method used for adding a post to backend
    createPost(postObj: PostObject): Observable<any> {
        return this.http.post('http://localhost:8080/add', postObj);
      }

    //http get method for receiving all the posts to populate the forum
    getAllPosts(): Observable<Array<PostObject>> {
        return this.http.get<Array<PostObject>>('http://localhost:8080/forum');
      }

    //http delete method to delete a post sent to backend
     deletePost(Id: number): void{
        console.log("this is the apiservice checker");
        console.log(Id);
        this.http.delete('http://localhost:8080/forum/' + Id).subscribe(() => this.status = 'Delete successful');
        console.log('it was maybe deleted?')
     }

    //http put method to edit post data using the postID
    editPost(postObj: PostObject, Id: number):Observable<any>{
      return this.http.put('http://localhost:8080/edit/'+ Id, postObj);
    }

    // WIP search http method
    searchAllPosts(searchTerm: String): Observable<any> {
            console.log(searchTerm + 'this is in apiservice');
            return this.http.get('http://localhost:8080/results?searchTerm=' + searchTerm);
    }

    // http get method for receiving the comments for a particular postId
      getAllComments(): Observable<CommentObj[]> {

        return this.http.get<CommentObj[]>('http://localhost:8080/comments');
      }


      postComment(commentObj: CommentObj): Observable<any> {
//       console.log('this is the comment Api service')
//       console.log(commentObj);
        return this.http.post<any>('http://localhost:8080/comments/add', commentObj);
      }

      getPostById(Id:number): Observable<PostObject>{
             console.log("api get post");
          return this.http.get<PostObject>('http://localhost:8080/viewpost/'+ Id)
          }

//       loginUser(loginObj: LoginObject): Observable<any>{
//         return this.http.get('http://localhost/8080/login')
//       }

}
