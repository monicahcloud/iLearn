import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  id: number = 0;
  assignId?: number = 0;
  name?: string = '';
  des: string = '';
  grade?: string = '';
  createDate?: Date = new Date();
  error: boolean = false;
  subjectId: number = 0

  constructor(private userService:UserService, private router:Router) { }

  onSubmit(): void{
    console.log(this.id,  this.des, this.subjectId,);
    this.userService.create(this.id, this.subjectId, this.des)
      .subscribe(data => {this.userService.user = {
        id: data.id,
        subjectId: data.subjectId,
        des: data.des,

      }
      this.error = false;
      //Is this the correct url?
      this.router.navigateByUrl('/assignments');
    },
      (error) => this.error=true);
  }

  ngOnInit(): void {
  }
}
