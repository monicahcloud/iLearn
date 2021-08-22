import { Injectable } from '@angular/core';
import { Assignments } from '../Assignments';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignment: Assignments[] = []
  subject: Subject<Assignments[]>  = new Subject<Assignments[]>();


  // assignment:Assignments = {
  //   assignId: 0,
  //   name: '',
  //   des: '',
  //   grade: '',
  //   createDate: new Date
  //   }
  constructor(private http: HttpClient) { }

    create(des:String): Observable<Assignments>{
      return this.http.post<Assignments>("http://localhost:8080/assignment/create", JSON.stringify({des}),{
        headers: {
          'Content-Type': 'application/json'
        }})
      .pipe(catchError((e) => {
        return throwError(e);
      }));
    }


  getAllAssignments(){
    this.http.get<Assignments[]>('http://localhost:8080/assignment/all',{
      headers:{
        'Content-type': 'application/json'
      }
    })
    .pipe(
     catchError((e)=> {
     return throwError(e);
   }))
      .subscribe(
       (data) => {
        this.assignment = data;
         this.subject.next(this.assignment);
         }
      )
       }

  viewGrades(){
    this.http.get<Assignments[]>('http://localhost:8080/assignment/viewgrades',{
          headers:{
            'Content-type': 'application/json'
          }
        })
        .pipe(
         catchError((e)=> {
         return throwError(e);
       }))
          .subscribe(
           (data) => {
            this.assignment = data;
             this.subject.next(this.assignment);
             }
          )
           }
}
