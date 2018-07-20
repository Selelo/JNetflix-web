import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {AppRouterModule} from './app.router.module';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import {FormsModule} from '@angular/forms';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import { RegisterComponent } from './components/register/register.component';
import {AuthGuard} from './guards/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesGridComponent,
    FooterComponent,
    LoginComponent,
    MoviesComponent,
    ProfilesComponent,
    MyListComponent,
    ShowMovieComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    YoutubePlayerModule
  ],
  providers: [
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
