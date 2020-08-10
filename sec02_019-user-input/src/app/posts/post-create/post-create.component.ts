import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
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

// export class PostCreateComponent implements OnInit {
//   newPost = 'NO CONTENT';
//   constructor() { }
//   ngOnInit() { }

//   onAddPost(userInput: HTMLTextAreaElement) {
//     console.dir(userInput)
//     // this.newPost = 'The User\'s Post';
//     this.newPost = userInput.value;
//   }
// }
