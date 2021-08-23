import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeGuard } from './guards/home.guard';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { GradesComponent } from './components/grades/grades.component';
import { RegisterComponent } from './components/register/register.component';
import { TeacherHomePageComponent} from './components/teacher-home-page/teacher-home-page.component'
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { ViewAssignmentsComponent } from './components/view-assignments/view-assignments.component';
import { UpdateComponent } from './components/update/update.component';
import { GradeAssignmentsComponent } from './components/grade-assignments/grade-assignments.component';

const routes: Routes = [
{path:'home', component: HomePageComponent, canActivate: [HomeGuard]},
{path: 'login', component: LoginPageComponent},
{path: 'discussion', component: DiscussionsComponent},
{path: 'grades', component: GradesComponent},
{path: 'register', component: RegisterComponent},
{path: 'teacher', component: TeacherHomePageComponent},
{path: 'assignments', component: AssignmentsComponent},
{path: 'view-assignments', component: ViewAssignmentsComponent},
{path: 'grade-assignments', component:  GradeAssignmentsComponent},
{path: 'update', component: UpdateComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
