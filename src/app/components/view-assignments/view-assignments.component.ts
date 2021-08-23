import { Component, OnInit, Input } from '@angular/core';
import { Assignments } from 'src/app/Assignments';
import { AssignmentsService } from 'src/app/services/assignments.service';
import{UserService} from 'src/app/services/user.service'
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-view-assignments',
  templateUrl: './view-assignments.component.html',
  styleUrls: ['./view-assignments.component.css']
})
export class ViewAssignmentsComponent implements OnInit {


  username = this.userService.user.username;
  
  liked = false;
  @Input() post: Assignments ={
    assignId: 0,
    name: '',
    des: '',
    grade: '',
    createDate: new Date,
    subjectId: 0,
    
  };

  assigns:any;

  constructor(private http: HttpClient, private userService:UserService, private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {  let res=this.http.get('http://localhost:8080/assignment/all',{
    headers:{
      'Content-type': 'application/json'
    }
  }
   );
   res.subscribe((data)=>this.assigns=data);
    }

  }
