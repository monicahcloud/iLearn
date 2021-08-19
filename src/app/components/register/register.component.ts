import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  userRole: string = '';
  error: boolean = false;

  constructor(private userService:UserService, private router:Router) { }
   
  // onSubmit(): void{
  //   console.log(this.firstName, this.lastName, this.email, this.password, this.userRole);
  //   this.userService.register(this.firstName, this.lastName, this.email, this.password, this.userRole)
  //     .subscribe(data => {this.userService.user = {
  //       id: data.id,
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       // username: data.username,
  //       password: data.password,
  //       userRole: data.userRole
  //     }
  //     this.error = false;
  //     //Is this the correct url?
  //     this.router.navigateByUrl('/home');
  //   },
  //     (error) => this.error=true);
  // }

  ngOnInit(): void {
  }

}