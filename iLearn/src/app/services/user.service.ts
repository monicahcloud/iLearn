import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {User} from 'src/app/User';

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
