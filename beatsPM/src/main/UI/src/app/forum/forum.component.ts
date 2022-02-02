
import { Component, OnInit } from '@angular/core';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';
import { DataShareService } from '../shared/datashare.service';
import { Observable, throwError, } from 'rxjs';
import { Router} from '@angular/router';
import { CommentObj } from '../comment/CommentObj'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts: Array<PostObject> = [];
  comments:Array<CommentObj> = [];
  filteredComments:Array<CommentObj> = [];
  commentForm!: FormGroup;
  commentObj!: CommentObj;




  constructor(private apiService: ApiService, private router: Router, private dataShareService: DataShareService, private fb: FormBuilder) {
  this.apiService.getAllPosts().subscribe(post => { this.dataShareService.setPosts(post); this.posts = dataShareService.getPosts();});
    this.apiService.getAllComments().subscribe(comments => {this.comments = comments; })
    this.commentObj={
    commentBody:'',
    postId: 0,
    commentId:0,
    username:'',
    }
  }

  ngOnInit(): void {

      this.initializeForm();
      this.commentForm = new FormGroup({
        commentBody: new FormControl('',  Validators.required),

      });
  }

  reloadCurrentPage() {
      window.location.reload();
     }

  ngDeletePost(postId: number) {
      console.log(this.apiService.deletePost(postId));
      this.reloadCurrentPage();
  }

  editPost(postId: number){
        this.router.navigateByUrl('/editpost/'+ postId);
        console.log(postId)
  }

viewPost(postId: number){
        this.router.navigateByUrl('/viewpost/'+ postId);
}


  searchPosts(searchTerm:string){
          this.apiService.searchAllPosts(searchTerm).subscribe(post => {
          this.posts = post;
          this.reloadCurrentPage();
    });
  }

    initializeForm(): void {
      this.commentForm = this.fb.group({
        commentBody: '',
        postId: 0,
        });
      };

      get f() {
        return this.commentForm.controls;
      };


}
