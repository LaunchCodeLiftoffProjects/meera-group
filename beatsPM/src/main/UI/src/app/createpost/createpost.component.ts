import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { postCreationObject } from './postCreationObject';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  
  private BASE_URL = 'https://2c3f7be5-0772-4bb5-9cf1-02c0188aaa6a.mock.pstmn.io'
  

  createPostForm = new FormGroup({
    postBody: new FormControl(''),
    postTitle: new FormControl(''),
    genre: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    };

  addPost() {
    const data: postCreationObject = {
      genre: this.createPostForm.controls['genre'].value,
      postTitle: this.createPostForm.controls['postTitle'].value,
      postBody: this.createPostForm.controls['postBody'].value,
      postId: 0,
      userId: 0
    };
    this.http.post<postCreationObject>(this.BASE_URL, data).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }))
    }

  ngOnInit(): void {
    this.initializeForm();
  };

  initializeForm(): void {
    this.createPostForm = this.fb.group({
      postTitle: '',
      postBody: '',
      genre: '',
      });
    };

    get f() {
      return this.createPostForm.controls;
    };
   

  onSubmit(): void {
    console.log(this.createPostForm);
    const data: postCreationObject = {
      genre: this.createPostForm.controls['genre'].value,
      postTitle: this.createPostForm.controls['postTitle'].value,
      postBody: this.createPostForm.controls['postBody'].value,
      postId: 0,
      userId: 0
    };
    this.http.post<any>(this.BASE_URL, data);
  };
}
