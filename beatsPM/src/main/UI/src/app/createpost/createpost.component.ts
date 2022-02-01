import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PostObject } from './PostObject';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

//   private BASE_URL = 'https://2c3f7be5-0772-4bb5-9cf1-02c0188aaa6a.mock.pstmn.io'

  postObject: PostObject;
  createPostForm!: FormGroup;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private api: ApiService
  ) {
    this.postObject = {
      postTitle: '',
      postBody: '',
      genre: '',
      youtubeLink: '',
      postId: 0,
    }
    };


  ngOnInit(): void {
    this.initializeForm();
    this.createPostForm = new FormGroup({
      postBody: new FormControl('',  Validators.required),
      postTitle: new FormControl('',  Validators.required),
      youtubeLink: new FormControl('', Validators.required),
      genre: new FormControl('',  Validators.required),
    });
  };
  //function to create the post using form values in localhost:4200/createpost
  createPost() {
    this.postObject.postTitle = this.createPostForm.controls['postTitle'].value;
    this.postObject.postBody = this.createPostForm.controls['postBody'].value;
    this.postObject.youtubeLink = "https://www.youtube.com/embed/"+ this.extractYoutubeId(this.createPostForm.controls['youtubeLink'].value);
    this.postObject.genre = this.createPostForm.controls['genre'].value;

    this.api.createPost(this.postObject).subscribe((data: any) => {
      this.router.navigateByUrl('/forum');
    }, (error: any) => {
      throwError(error);
    })
  }

  initializeForm(): void {
    this.createPostForm = this.fb.group({
      postTitle: '',
      postBody: '',
      youtubeLink: '',
      genre: '',
      });
    };
 extractYoutubeId(url: string){
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

    let Id : string;
    let match = url.match(regExp);

    if(((match&&match[7].length==11)? match[7] : false)){
    Id = match![7];
    } else{
    Id = "No Link"
    }
return Id;
}
    get f() {
      return this.createPostForm.controls;
    };


  onSubmit(): void {
  };
}



