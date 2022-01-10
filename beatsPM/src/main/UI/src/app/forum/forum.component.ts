import { Component, OnInit } from '@angular/core';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';
import { DataShareService } from '../shared/datashare.service';
import { Observable, throwError, } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts: Array<PostObject> = [];


  constructor(private apiService: ApiService, private router: Router, private dataShareService: DataShareService) {
  this.apiService.getAllPosts().subscribe(post => {
          this.dataShareService.setPosts(post);
          this.posts = dataShareService.getPosts();
    });

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
