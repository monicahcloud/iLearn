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
      console.log("post is submitted into the database")
    }
    
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    //use ngOnInit lifecycle method to grab the posts as soon as the posts-container component is created
    console.log(this.postService.subject)
    this.postService.getPosts();
    this.postService.getAllPosts();
    this.posts = this.postService.subject;
    console.log(this.posts)
  }

}
