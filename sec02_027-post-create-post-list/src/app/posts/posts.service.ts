import { Injectable } from '@angular/core';
import { Post } from './post.model';

// Only inject in the root level
@Injectable({provideIn: 'root'})
export class PostsService  {
  private posts: Post[] = [];
  getPost() {
    return [...this.posts]; // clone another new array
  }
  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push (post);
  }
}
