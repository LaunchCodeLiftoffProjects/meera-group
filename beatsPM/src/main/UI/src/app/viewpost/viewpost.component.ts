import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';
import { Observable, throwError, } from 'rxjs';
import { CommentObj } from '../comment/CommentObj'
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  postId: number;

  post!: PostObject;
  youtubeId!: string;
  sanUrl !: SafeResourceUrl;

  comments:Array<CommentObj> = [];
  filteredComments:Array<CommentObj> = [];
  commentForm!: FormGroup;
  commentObj!: CommentObj;
  loggedinUsername!: string | null




  constructor( public sanitizer: DomSanitizer, private apiService: ApiService,  private router: Router,private route: ActivatedRoute, private fb: FormBuilder ) {
    this.postId = route.snapshot.params.id;



    this.apiService.getPostById(route.snapshot.params.id).subscribe((response : PostObject) =>{
    this.post = response;
    this.youtubeId = response.youtubeLink
    this.sanUrl=this.getYoutubeURL(this.youtubeId);
    })



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
this.loggedinUsername = localStorage.getItem('username')
  }

    reloadCurrentPage() {
        window.location.reload();

       }

   ngDeletePost(postId: number) {
        console.log("please work")
        this.apiService.deletePost(postId);
        this.router.navigateByUrl('/forum');
    }
      editPost(postId: number){
            this.router.navigateByUrl('/editpost/'+ postId);

      }


      getYoutubeURL(videoId: string){
      return this.sanitizer.bypassSecurityTrustResourceUrl(videoId);
      }


  leaveComment(postId: number){
 //   console.log(postId);
   this.commentObj.postId = postId;
   this.commentObj.commentBody = this.commentForm.controls['commentBody'].value;
   this.commentObj.username = localStorage.getItem('username');

   this.apiService.postComment(this.commentObj).subscribe((data)=>{
   this.reloadCurrentPage();
   }, error=> {
   throwError(error);
   })

   }

   filterComments(postId: number){
   this.filteredComments=[];
   for(let i = 0; i<this.comments.length;i++){

   if(this.comments[i].postId== postId){
     this.filteredComments.push(this.comments[i]);
   }
   }
   }

   deleteComment(commentId: number){
this.apiService.deleteComment(commentId);
//  this.reloadCurrentPage();

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
