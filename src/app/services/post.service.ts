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

  posts:Posts[] = [];
  subject: Subject<Posts[]> = new Subject<Posts[]>();
  constructor(private http: HttpClient, private userService:UserService) { }

  getPosts(): Observable<Posts[]>{
    this.http.get<Posts[]>('http://localhost:8080/iLearn/api/posts')
    .pipe(
      catchError((e)=> {
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          this.posts = data;
          this.subject.next(this.posts);
        }
      )
}

addPost(post: Post){
  let obj = {
    userId: this.userService.user.id,
    content: post.content
  }

  this.http.post('http://localhost:8080/iLearn/api/posts', JSON.stringify(obj))
  .pipe(
    catchError((e)=>{
      return throwError(e);
    }))
    .subscribe(
      (data) => {
        console.log(data);
        this.posts.unshift(post);
        this.subject.next(this.posts);
      }
    )
  }
}