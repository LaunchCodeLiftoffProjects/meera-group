import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
postId: number;
post!: PostObject;
  constructor(  private apiService: ApiService,  private router: Router,private route: ActivatedRoute) {
    this.postId = route.snapshot.params.id;

    this.apiService.getPostById(this.postId).subscribe((response : PostObject) =>{
    this.post = response;
    })

  }

  ngOnInit(): void {

console.log(this.post);



  }
}
