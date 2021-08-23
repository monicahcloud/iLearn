import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  id: number = 0;
  userId: number = 0;
  subjectId: number= 0;
  name: string = '';
  content: string = '';
  error: boolean = false;

  constructor(private userService:UserService, private router:Router, private assignmentsService:AssignmentsService) { }

   onSubmit(): void{
     console.log(this.userId, this.id, this.subjectId, this.name, this.content);
    this.assignmentsService.submitAssignments(this.userId, this.id, this.subjectId, this.name, this.content)
      .subscribe((data:any) => {this.assignmentsService.assignments = {
        userId: data.userId,
        id: data.id,
        subjectId: data.subjectId,
        name: data.name,
        content: data.content
       }
       this.error = false;
      
       this.router.navigateByUrl('/grade-assignments');
     },
       (error:any) => this.error=true);
   }
  ngOnInit(): void {
  }

}
