import { Component, OnInit } from '@angular/core';
import {Posts} from 'src/app/Posts';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  posts: Observable<Posts[]> = new Observable<Posts[]>();

    addPost(post: Posts): void{
      this.postService.addPost(post);
      this.posts = this.postService.subject;
    }
    
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    //use ngOnInit lifecycle method to grab the posts as soon as the posts-container component is created
    this.postService.getPosts();
    this.posts = this.postService.subject;
  }

}
