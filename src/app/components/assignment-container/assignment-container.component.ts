import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Assignments } from 'src/app/Assignments';
import { AssignmentsService } from 'src/app/services/assignments.service';
import{UserService} from 'src/app/services/user.service'

@Component({
  selector: 'app-assignment-container',
  templateUrl: './assignment-container.component.html',
  styleUrls: ['./assignment-container.component.css']
})
export class AssignmentContainerComponent implements OnInit {
  assignments: Observable<Assignments[]> = new Observable<Assignments[]>();


  constructor(private assignmentService:AssignmentsService, private userService:UserService) { }

  ngOnInit(): void {
 
  this.assignmentService.getAllAssignments();
  this.assignments = this.assignmentService.subject;
  console.log(this.assignments)
}
 }