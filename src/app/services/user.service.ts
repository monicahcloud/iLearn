import { Injectable } from '@angular/core';
import {User} from 'src/app/User';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user:User = {
    id: 0,
    username: ''
  }

  login(username:string, password:string):Observable<User>{
   
    return this.http.post<User>("http://localhost:8080/iLearn/api/users/login", JSON.stringify({username, password}),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(catchError((e) => {
   
    return throwError(e);
    }));

  }
  constructor(private http: HttpClient ) { }
}
// , private location:Location