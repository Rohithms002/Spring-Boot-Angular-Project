import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ManualComponent } from 'e2e/src/manual.compnent';
import { RohithComponent } from './rohith/rohith.component';
import { LoginComponent } from './login/login.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { MoviesComponent } from './movies/movies.component';
import {HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { DisplayComponent } from './display/display.component';
import { RecruitmentMainComponent } from './recruitment-main/recruitment-main.component';
import { InterviewRecruitmentComponent } from './interview-recruitment/interview-recruitment.component';
import { DisplayReruitmentComponent } from './display-reruitment/display-reruitment.component'


@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    RohithComponent,
    LoginComponent,
    RecruitmentComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ImageHoverComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    LifeCycleHooksComponent,
    MoviesComponent,
    NewsComponent,
    UsersComponent,
    FilterPipePipe,
    DisplayComponent,
    RecruitmentMainComponent,
    InterviewRecruitmentComponent,
    DisplayReruitmentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot([
     {
       path: "", component:HomeComponent},
       {path: "login", component:LoginComponent},
       {path: "interview", component:RecruitmentComponent},
       {path:"databinding" ,component:RohithComponent },
       {path:"parent" ,component:ParentComponent },
       {path:"lifecycle" ,component:LifeCycleHooksComponent },
       {path:"movies" ,component:MoviesComponent },
       {path:"news" ,component:NewsComponent },
       {path: "users", component:UsersComponent},
       {path: "display", component:DisplayComponent},
       {path: "recruitment", component:InterviewRecruitmentComponent},
       {path: "displayrecruitment", component:DisplayReruitmentComponent},

       {path:"**" ,component:PageNotFoundComponent }
     
       
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
