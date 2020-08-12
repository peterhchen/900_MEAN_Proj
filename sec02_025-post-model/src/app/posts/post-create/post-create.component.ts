import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterContent = 'NO CONTEXT';
  enterTitle = 'No TITLE';
  newPost = 'NO CONTEXT';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }
  ngOnInit() { }

  onAddPost() {
    console.log ('onAddPost: this.enterValue', this.enterContent);
    this.newPost = this.enterContent;
    const post: Post = {
      title: this.enterTitle,
      content: this.enterContent
    };
    this.postCreated.emit(post);
  }
}
