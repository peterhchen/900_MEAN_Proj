import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAddPost(form: NgForm) {
    if (form.invalid) return;
    console.log ('onAddPost: this.enterValue', this.enterContent);
    this.newPost = this.enterContent;
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }
}
