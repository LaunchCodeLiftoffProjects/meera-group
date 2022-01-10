import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PostObject } from '../createpost/PostObject';
import { ApiService } from '../shared/api.service';
import { DataShareService } from '../shared/datashare.service';
import { Router} from '@angular/router';

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
    private router: Router,
    private dataShareService: DataShareService,
  ) {}

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
              this.dataShareService.setPosts(post);
              console.log(this.dataShareService.getPosts());
    });

  }

  onSubmit(): void {
    console.log(this.router.url);
    if (this.router.url === '/results') {
      this.router.navigateByUrl('/');
      this.searchPosts(this.createSearch.controls['searchText'].value);
      setTimeout(() => {
                  this.router.navigateByUrl('/results');
                  }, 500);
      console.log('this is within the first if');
    } else {
    this.searchPosts(this.createSearch.controls['searchText'].value);
    console.log('this is within else if');
    setTimeout(() => {
            this.router.navigateByUrl('/results');
            console.log('this is within the settimeout function');
            }, 500);
    }

  };
}
