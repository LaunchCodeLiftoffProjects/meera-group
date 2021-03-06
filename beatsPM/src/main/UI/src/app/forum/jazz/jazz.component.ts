import { Component, OnInit } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { PostObject } from '../../createpost/PostObject';
import { DataShareService } from '../../shared/datashare.service';

@Component({
  selector: 'app-jazz',
  templateUrl: './jazz.component.html',
  styleUrls: ['./jazz.component.css']
})
export class JazzComponent implements OnInit {
// Arrays to hold the posts from backend
  posts: Array<PostObject> = [];
  postsGenre: Array<PostObject> = [];
    loggedinUsername!: String | null;


  constructor(private apiService: ApiService, private router: Router,  private dataShareService: DataShareService) {
  this.apiService.getAllPosts().subscribe(post => {
       this.dataShareService.setPosts(post);
       this.posts = dataShareService.getPosts();
        for (let post of this.posts) {
          console.log(post.genre);
          if (post.genre == 'JAZZ') {
            this.postsGenre.push(post);
          }
        }

        })
}
  ngOnInit(): void {
    this.loggedinUsername = localStorage.getItem('username')
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
}
