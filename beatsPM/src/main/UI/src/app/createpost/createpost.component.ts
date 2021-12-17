import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { postCreationObject } from './postCreationObject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  
  private BASE_URL = 'localhost:8080'
  
  posts: Observable<any> | any;
  newPost: Observable<any> | any;

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
      userId: 0,
      postId: 0,
      genre: this.createPostForm.controls['genre'].value,
      postTitle: this.createPostForm.controls['postTitle'].value,
      postBody: this.createPostForm.controls['postBody'].value,
    } 
    console.log(data);
    this.newPost = this.http.post(this.BASE_URL = '/posts', data)
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
    this.addPost();
  };
}
