import { Component, OnInit } from '@angular/core';
import {Posts} from 'src/app/Posts';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  posts: Posts[] = [];

    addPosts(post: Posts): void{
      this.posts = this.postService.addPost(post);


    }
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    //use ngOnInit lifecycle method to grab the posts as soon as the posts-container component is created
    this.posts = this.postService.getPosts();
  }

}
