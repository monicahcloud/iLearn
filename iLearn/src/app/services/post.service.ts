import { Injectable } from '@angular/core';
import {POSTS } from 'src/app/mock-posts'
import {Posts} from 'src/app/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Posts[]{
  return POSTS;
}

addPost(post: Posts): Posts[]{
  let postArr: Posts[] = POSTS;
  postArr.unshift(post);
  return postArr;
}
}
