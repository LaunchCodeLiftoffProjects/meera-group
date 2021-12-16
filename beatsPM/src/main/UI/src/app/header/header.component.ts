import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  createSearch = new FormGroup({
    searchText: new FormControl(''),
  });

  constructor(
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

  onSubmit(): void {
    console.log(this.createSearch);

    let postCreation = JSON.stringify(this.createSearch.value);
    alert(postCreation);
  };

}
