import { Component, OnInit } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { PostObject } from '../../createpost/PostObject';
import { DataShareService } from '../../shared/datashare.service';

@Component({
  selector: 'app-edm',
  templateUrl: './edm.component.html',
  styleUrls: ['./edm.component.css']
})
export class EdmComponent implements OnInit {
// Arrays to hold the posts from backend
  posts: Array<PostObject> = [];
  postsGenre: Array<PostObject> = [];


  constructor(private apiService: ApiService, private router: Router,  private dataShareService: DataShareService) {
  this.apiService.getAllPosts().subscribe(post => {
        this.dataShareService.setPosts(post);
        this.posts = dataShareService.getPosts();
        for (let post of this.posts) {
          console.log(post.genre);
          if (post.genre == 'EDM') {
            this.postsGenre.push(post);
          }
        }

        })
}
  ngOnInit(): void {

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

  searchPosts(searchTerm:string){
          this.apiService.searchAllPosts(searchTerm).subscribe(post => {
          this.posts = post;
          this.reloadCurrentPage();
    });
  }
}

