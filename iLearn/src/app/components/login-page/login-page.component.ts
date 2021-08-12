import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private userService:UserService ) { }

  onSubmit(): void{
    console.log(this.username, this.password);
    this.userService.login(this.username, this.password)
  }

  ngOnInit(): void {
  }

}
