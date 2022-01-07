import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

posts: Array<PostObject> = [];

  createSearch = new FormGroup({
    searchText: new FormControl(''),
  });

  constructor(private apiService: ApiService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  };

  initializeForm(): void {
    this.createSearch = this.fb.group({
      searchText: ''
      });
    };

    get f() {
      return this.createSearch.controls;
    };
  searchPosts(searchTerm:string){
  this.apiService.searchAllPosts(searchTerm).subscribe(post => {
          this.posts = post;
   window.location.reload();
    });
  }

  onSubmit(): void {
    console.log(this.createSearch);

    let postCreation = this.createSearch.value;
//     alert(postCreation);
      this.searchPosts(this.createSearch.controls['searchText'].value)

  };

}
