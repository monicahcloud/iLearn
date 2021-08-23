import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AssignmentsService } from 'src/app/services/assignments.service';


@Component({
  selector: 'app-grade-assignments',
  templateUrl: './grade-assignments.component.html',
  styleUrls: ['./grade-assignments.component.css']
})
export class GradeAssignmentsComponent implements OnInit {
  id: number = 0;
  userId: number = 0;
  grade: string = '';
  assignId: number = 0;
  error: boolean = false;

  constructor(private userService:UserService, private router:Router, private assignmentsService:AssignmentsService) { }

   onSubmit(): void{
     console.log(this.id, this.grade, this.assignId);
    this.assignmentsService.gradeAssignments(this.id, this.grade, this.assignId)
      .subscribe((data:any) => {this.assignmentsService.assignments = {
      
        id: data.id,
         grade: data.grade,
         assignId: data.assignId
       }
       this.error = false;
      
       this.router.navigateByUrl('/grade-assignments');
     },
       (error:any) => this.error=true);
   }
  ngOnInit(): void {
  }

}
