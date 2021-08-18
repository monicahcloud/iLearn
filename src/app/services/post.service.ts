import { Injectable } from '@angular/core';
import {POSTS } from 'src/app/mock-posts'
import {Posts} from 'src/app/Posts';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 
  constructor() { }

  getPosts(): Posts[]{
    return POSTS;
    // this.http.get<Posts[]>('http://localhost:8080/iLearn/api/posts')
    // .pipe(
    //   catchError((e)=> {
    //     return throwError(e);
    //   }))
    //   .subscribe(
    //     (data) => {
    //       this.posts = data;
    //       this.subject.next(this.posts);
        }

addPost(post: Posts): Posts[]{
  let postArr: Posts[] = POSTS;
  postArr.unshift(post);
  return postArr;
  }
}