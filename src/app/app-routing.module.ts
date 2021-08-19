import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeGuard } from './guards/home.guard';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { GradesComponent } from './components/grades/grades.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
{path:'home', component: HomePageComponent, canActivate: [HomeGuard]},
{path: 'login', component: LoginPageComponent},
{path: 'discussion', component: DiscussionsComponent},
{path: 'grades', component: GradesComponent},
{path: 'register', component: RegisterComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
