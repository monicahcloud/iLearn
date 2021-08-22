import { Component, OnInit, Input } from '@angular/core';
import { Assignments } from 'src/app/Assignments';
import { AssignmentsService } from 'src/app/services/assignments.service';
import{UserService} from 'src/app/services/user.service'

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

  constructor(private userService:UserService, private assignmentsService:AssignmentsService) { }


  ngOnInit(): void {
  }

}
