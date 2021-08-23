import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// import {FormGroup, FormControl} from 'src/app/services'

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
  roleId: number = 0;
  error: boolean = false;

  constructor(private userService:UserService, private router:Router) { }
   
  onSubmit(): void{
    console.log(this.firstName, this.lastName, this.email, this.password, this.roleId);
    this.userService.register(this.firstName, this.lastName, this.email, this.password, this.roleId)
      .subscribe(data => {this.userService.user = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        roleId: data.roleId
      }
      this.error = false;
      
      this.router.navigateByUrl('/login');
    },
      (error) => this.error=true);
  }

  ngOnInit(): void {
  }

}