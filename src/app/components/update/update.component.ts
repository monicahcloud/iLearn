
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Assignments } from 'src/app/Assignments';
import { AssignmentsService } from 'src/app/services/assignments.service';
import{UserService} from 'src/app/services/user.service'
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  users!: User; 
  password: string = '';
  userId: number = 0;
  error: boolean = false;


  constructor(private http: HttpClient, private userService:UserService, private router:Router) { 
  
  }
  onSubmit(): void{
    console.log(this.userId, this.password);
    this.userService.update( this.userId, this.password)
      .subscribe(data => {this.userService.user = {
        userId: data.id,
        password: data.password,
        
      }
      this.error = false;
      
      this.router.navigateByUrl('/update');
    },
      (error) => this.error=true);
  }

  show:boolean = false;
  
  // toogleTag(){
  //   this.show = !this.show;
  // } 
    ngOnInit(): void {
  
    }
}
