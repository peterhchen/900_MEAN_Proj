import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterValue = 'NO CONTEXT';
  newPost = 'NO CONTEXT';
  constructor() { }
  ngOnInit() { }

  onAddPost() {
    console.log ('onAddPost: this.enterValue', this.enterValue)
    this.newPost = this.enterValue;
  }
}
