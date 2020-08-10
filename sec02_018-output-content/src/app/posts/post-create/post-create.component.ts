import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {
  newPost = 'NO CONTENT';
  constructor() { }
  ngOnInit() { }

  onAddPost() {
    this.newPost = 'The User\'s Post';
  }
}
