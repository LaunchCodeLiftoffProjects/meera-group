import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  
  postCreation = {
    postBody: '',
    postTitle: '',
    genre: ''
  }

  createPostForm = new FormGroup({
    postBody: new FormControl(''),
    postTitle: new FormControl(''),
    genres: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
  ) {
    };

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createPostForm = this.fb.group({
      postTitle: '',
      postBody: '',
      genres: '',
      });
    }

    get f() {
      return this.createPostForm.controls;
    }

  onSubmit(): void {
    console.log(this.createPostForm);
    
  }
}
