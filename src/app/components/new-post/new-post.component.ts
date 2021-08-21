import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Posts } from 'src/app/Posts';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  @Output() onAddPost: EventEmitter<Posts> = new EventEmitter();

username: string = '';
content  : string = '';
likes: number = 0;
error: boolean = false;
date: Date = new Date();

constructor(private userService:UserService) { }

onSubmit(): void{
  if(!this.content ){
    this.error= true;
    return;
  }

  const newPost: Posts = {
    dissId: 0,
   
    dissContent: this.content ,
    
  }
 
  this.onAddPost.emit(newPost);

  this.content = '';
  this.error = false;

}

  ngOnInit(): void {
  }

}
