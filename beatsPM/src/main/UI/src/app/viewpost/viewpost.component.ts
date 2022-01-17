import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';
import { Observable, throwError, } from 'rxjs';
import { CommentObj } from '../comment/commentObj'
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  postId: number;

  post!: PostObject;
  url: string = "https://www.youtube.com/embed/"
  comments:Array<CommentObj> = [];
  filteredComments:Array<CommentObj> = [];
  commentForm!: FormGroup;
  commentObj!: CommentObj;



  constructor( public sanitizer: DomSanitizer, private apiService: ApiService,  private router: Router,private route: ActivatedRoute, private fb: FormBuilder ) {
    this.postId = route.snapshot.params.id;



    this.apiService.getPostById(this.postId).subscribe((response : PostObject) =>{
    this.post = response;
    })



    this.apiService.getCommentsByPostId(this.postId).subscribe((response : CommentObj[]) =>{
    this.comments = response;
    })


     this.apiService.getAllComments().subscribe(comments => {this.comments = comments; })
        this.commentObj={
        commentBody:'',
        postId: 0,
        commentId:0,
        }

  }

  ngOnInit(): void {

 this.initializeForm();
      this.commentForm = new FormGroup({
        commentBody: new FormControl('',  Validators.required),

      });

//

  }
    reloadCurrentPage() {
        window.location.reload();

       }

   ngDeletePost(postId: number) {
        console.log("please work")
        this.apiService.deletePost(postId);
        this.reloadCurrentPage();
    }
      editPost(postId: number){
            this.router.navigateByUrl('/editpost/'+ postId);

      }



 youtube_parser(){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = this.post.youtubeLink.match(regExp);

//     document.getElementById("myFrame").src = "https://www.youtube.com/embed/LrkHZpQ05UU"

    return ((match&&match[7].length==11)? match[7] : false);
}





  leaveComment(postId: number){
 //   console.log(postId);
   this.commentObj.postId = postId;
   this.commentObj.commentBody = this.commentForm.controls['commentBody'].value;

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
