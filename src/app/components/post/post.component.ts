import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from 'src/app/Posts';
import{UserService} from 'src/app/services/user.service'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  username = this.userService.user.username;
  
  liked = false;
  @Input() post: Posts ={
    dissId: 0,
    dissContent: '',
    
  };

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
