import { Component, OnInit } from '@angular/core';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts: Array<PostObject> = [];

  constructor(private apiService: ApiService) {
    this.apiService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
  }
  
  


}
