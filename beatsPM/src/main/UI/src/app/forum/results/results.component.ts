import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { PostObject } from '../../createpost/PostObject';
import { DataShareService } from '../../shared/datashare.service';
import { Observable, throwError, } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  posts: Array<PostObject> = [];


  constructor(private apiService: ApiService, private router: Router, private dataShareService: DataShareService) {
    this.posts = dataShareService.getPosts();
    console.log(this.dataShareService.getPosts());
  }

  ngOnInit(): void {
  }

  reloadCurrentPage() {
      window.location.reload();
     }

  ngDeletePost(postId: number) {
      console.log("please work");
      this.apiService.deletePost(postId);
      this.reloadCurrentPage();
  }

  editPost(postId: number){
        this.router.navigateByUrl('/editpost/'+ postId);
        console.log(postId)
  }
}
