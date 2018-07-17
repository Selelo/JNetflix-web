import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MoviesComponent} from './components/movies/movies.component';
import {ProfilesComponent} from './components/profiles/profiles.component';
import {MyListComponent} from './components/my-list/my-list.component';
import {ShowMovieComponent} from './components/show-movie/show-movie.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'movie/:id', component: ShowMovieComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'list', component: MyListComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
