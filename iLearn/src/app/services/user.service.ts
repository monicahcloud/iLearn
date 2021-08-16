import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {User} from 'src/app/User';
import {HttpClient} from '@angular/common/http';
import { fromEventPattern, Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user:User = {
    id: 0,
    username: ''
  }

  login(username:string, password:string):void{
    this.user = {
      id:1,
      username: username
    }
    this.router.navigateByUrl('/home');

  }
  constructor(private router:Router ,private location:Location ) { }
}
