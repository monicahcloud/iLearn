import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from 'src/app/Posts';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input() post: Posts ={
    id: 0,
    username: '',
    content: '',
    likes:0
  };

    liked: boolean = false;

    likePost(): void{
      if (this.liked){
        this.liked = !this.liked;
        if(this.post.likes){
          this.post.likes--;
        }
      } else {
        this.liked = !this.liked;
       if(this.post.likes){
         this.post.likes++;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
