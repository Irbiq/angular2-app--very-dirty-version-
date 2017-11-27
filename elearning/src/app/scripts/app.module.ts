import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {VideoComponent} from "./temp/course/_course_step/video-step/video.component";
import {HomeheadComponent} from "./temp/homehead/app.homehead";
import {AuthGuard} from "./temp/_guards/auth.guard";
//import {CourseComponent} from "./temp/course/app.course";//////////////////
import {LoginComponent} from "./temp/login/login.component";
import {RegisterComponent} from "./temp/register/register.component";
import {BaseRequestOptions, HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./temp/navbar/app.navbar";
import {AuthenticationService} from "./temp/_services/authentication.service";
import {UserService} from "./temp/_services/user.service";
import {fakeBackendProvider} from "./temp/_helpers/fake-backend";
import {MockBackend} from "@angular/http/testing";
import { NgbModule, NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { AddCourseInfoComponent } from "./temp/add_course/info/add-info.component";
import { AddCourseComponent } from "./temp/add_course/add-course/add-course.component";
import { NewStepComponent } from "./temp/add_course/addstep/new-step.component";
import { AddVideoComponent } from "./temp/add_course/video/add-video.component";
import { AddTextComponent } from "./temp/add_course/text/add-text.component";
import { AddTestComponent } from "./temp/add_course/test/add-test.component";
import { AddTaskComponent } from "./temp/add_course/task/add-task.component";
import { TestComponent } from "./temp/course/_course_step/test-step/test.component";
import { TextComponent } from "./temp/course/_course_step/text-step/text.component";
import { CourseService } from "./temp/_services/_course/course.service";
import { TextService } from "./temp/_services/_course/text.service";
import { VideoService } from "./temp/_services/_course/video.service";
import { TestService } from "./temp/_services/_course/test.service";
import { TaskService } from "./temp/_services/_course/task.service";
import { InfoService } from "./temp/_services/_course/info.service";
import { CourseComponent } from "./temp/course-view/app.course";
import { CourseComponent1 } from "./temp/course/app.course";
import { TextComponent1 } from "./temp/course-view/_course_step/text-step/text.component";
import { TaskComponent } from "./temp/course/_course_step/task-step/task.component";
import { TestComponent1 } from "./temp/course-view/_course_step/test-step/test.component";
import { VideoComponent1 } from "./temp/course-view/_course_step/video-step/video.component";
import { TaskComponent1 } from "./temp/course-view/_course_step/task-step/task.component";



const addStepRoute:Routes=[

    {path:'video', component:AddVideoComponent},
    {path:'text', component:AddTextComponent},
    {path:'task', component:AddTaskComponent},
    {path:'test', component:AddTestComponent},

    {path:'video-view/:id', component:VideoComponent},
    {path:'text-view/:id',  component:TextComponent},
    {path:'task-view/:id',  component:TaskComponent},
    {path:'test-view/:id',  component:TestComponent},
]

const newStepsRoute: Routes =[
    {path: 'new', component: AddCourseComponent ,children: addStepRoute },

    //{ path: '**', component: StepsComponent}
];

const courseRoutes: Routes = [


    { path: 'video-view/:id', component: VideoComponent1},
    { path: 'text-view/:id', component: TextComponent1},

    { path: 'test-view/:id', component: TestComponent1},
    { path: 'task-view/:id', component: TaskComponent1}

    //{ path: '**', component: StartCourseComponent}

];

var routes: Routes =[
/*!!!*/{ path: '', component: HomeheadComponent,canActivate: [AuthGuard] },
    { path: 'course/:id', component: CourseComponent, children:courseRoutes },

    { path: 'add', component: AddCourseInfoComponent},
    { path: 'steps', component: AddCourseComponent, children:addStepRoute },

    { path: 'login', component: LoginComponent },
    { path: 'register', component:RegisterComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];


@NgModule({
    imports:[RouterModule.forRoot(routes),BrowserModule,FormsModule,HttpModule,NgbModule.forRoot()],
    declarations: [
        //AlertComponent,

        AppComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        HomeheadComponent,
        AddCourseInfoComponent,
        CourseComponent,

        //////Text Need to be deleted///////////
        TextComponent1,
        TaskComponent1,
        TestComponent1,
        VideoComponent1,
        TaskComponent,
        ////////////////////////////////////

        //  SignupComponent,
        VideoComponent,
        TestComponent,
        TextComponent,
        //////////////
        AddCourseComponent,
        NewStepComponent,
        /////////////////

        ///////////////
        AddVideoComponent,
        AddTaskComponent,
        AddTestComponent,
        AddTextComponent,

    ],
    providers: [

        //////////////////////////
        TextService,
        VideoService,
        TestService,
        TaskService,
        InfoService,///?????/////
        /////////////////////////



        AuthGuard,
      //  AlertService,
        AuthenticationService,
        UserService,
        //

        //
        CourseService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],

    bootstrap: [AppComponent]

})
export class AppModule{}