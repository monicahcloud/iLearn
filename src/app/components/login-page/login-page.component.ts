import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = '';
  password: string = '';
  userRole: object = {userrole:''};
  userrole: string = '';
  error: boolean = false;

  constructor(private userService:UserService, private router:Router) { }

  onSubmit(): void{
    console.log(this.username, this.password);
    this.userService.login(this.username, this.password)
    .subscribe(data => {
     
      this.userService.user = {
      id: data.id,
      username: data.username,
      userRoles: data.userRoles
    }
    console.log(data)
    this.error = false;
    console.log(this.userService.user.userRoles);
     if(this.userService.user.userRoles){
       if(this.userService.user.userRoles.userRole === "STUDENT"){
       this.router.navigateByUrl('/home');
      }else  {
       this.router.navigateByUrl('/teacher');
    }
     } 

  },
    (error) => this.error=true);
}

  ngOnInit(): void {
  }
}