import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { UserService } from './user.service';
import {Posts} from 'src/app/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 posts: Posts[] = []
 subject: Subject<Posts[]>  = new Subject<Posts[]>();

  constructor(private http: HttpClient, private userService:UserService) { }


  getPosts(){
   this.http.get<Posts[]>('http://localhost:8080/users/discussion/'+ this.userService.user.id,{
     headers:{
       'Content-type': 'application/json'
     }
   })
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
      getAllPosts(){
        this.http.get<Posts[]>('http://localhost:8080/discussion/all',{
          headers:{
            'Content-type': 'application/json'
          }
        })
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
      
addPost(post: Posts){
  let obj = {
    userId: this.userService.user.id,
    content: post.dissContent
  } 
  console.log(obj)
  this.http.post('http://localhost:8080/discussion/create', JSON.stringify(obj),
  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
 
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