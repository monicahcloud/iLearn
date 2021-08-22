import { Component, OnInit } from '@angular/core';
import { Assignments } from 'src/app/Assignments';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  assigns:any;
  constructor(private http: HttpClient, private assignmentService:AssignmentsService, private userService: UserService){ }


  ngOnInit(): void {

    let res=this.http.get('http://localhost:8080/users/assignment/'+ this.userService.user.id,{
  headers:{
    'Content-type': 'application/json'
  }
}
 );
 res.subscribe((data)=>this.assigns=data);
  }
  }

