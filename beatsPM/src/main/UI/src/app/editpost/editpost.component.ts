import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../shared/api.service'
import { Router } from '@angular/router';
import { PostObject } from './PostObject';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {


  postObject: PostObject;
  editPostForm!: FormGroup;
  posts: Array<PostObject> = [];
  id: number;
  postId: number;


constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
     this.id = route.snapshot.params.id;
    this.postId =route.snapshot.params.id;

    this.postObject = {
      postTitle: '',
      postBody: '',
      youtubeLink: '',
      genre: '',
      postId: 0,
    }
    };

  ngOnInit(): void {
  this.api.getAllPosts().subscribe(post => {
          this.posts = post;

          for(let i:number = 0; i<=this.posts.length;i++){

          console.log(this.id)
          console.log(this.posts[i].postId)
          if(this.posts[i].postId==this.id){
          this.id = i
          console.log(this.id)
          break
          }
          }

      this.editPostForm = new FormGroup({
      postBody: new FormControl(this.posts[this.id].postBody,  Validators.required),
      postTitle: new FormControl(this.posts[this.id].postTitle,  Validators.required),
      youtubeLink: new FormControl(this.posts[this.id].youtubeLink, Validators.required),
      genre: new FormControl(this.posts[this.id].genre,  Validators.required),
      });
    });
  };
    //function used to edit the post by grabbing post data and editing the post using postid
    editPost() {
      this.postObject.postTitle = this.editPostForm.controls['postTitle'].value;
      this.postObject.postBody = this.editPostForm.controls['postBody'].value;
      this.postObject.youtubeLink = this.editPostForm.controls['youtubeLink'].value;
      this.postObject.genre = this.editPostForm.controls['genre'].value;

      this.api.editPost(this.postObject,this.postId).subscribe((data) => {
      console.log(this.id)
        this.router.navigateByUrl('/viewpost/'+ this.postId);
      }, error => {
        throwError(error);
      })
    }

    initializeForm(): void {
        this.editPostForm = this.fb.group({
          postTitle: '',
          postBody: '',
          youtubeLink: '',
          genre: '',
          });
        };

        get f() {
          return this.editPostForm.controls;
        };


      onSubmit(): void {
      };





}
