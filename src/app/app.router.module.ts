import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MoviesComponent} from './components/movies/movies.component';
import {ProfilesComponent} from './components/profiles/profiles.component';
import {MyListComponent} from './components/my-list/my-list.component';
import {ShowMovieComponent} from './components/show-movie/show-movie.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './guards/AuthGuard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
    { path: 'movie/:id', component: ShowMovieComponent, canActivate: [AuthGuard] },
    { path: 'profiles', component: ProfilesComponent, canActivate: [AuthGuard] },
    { path: 'list', component: MyListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
