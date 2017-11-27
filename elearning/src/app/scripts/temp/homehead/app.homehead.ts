import {Component, OnInit} from '@angular/core';
import { CourseService } from "../_services/_course/course.service";
import { Course } from "../_models/course/course";
import { Router } from "@angular/router";



@Component({
    selector: 'my-homehead',
    templateUrl: './homehead.html',
    styles:[require('./homehead.css').toString()],


//    providers: [CourseViewService]

})
export class HomeheadComponent  implements OnInit {


    private courses_info:Array<any> = [];
    private title:string = "title";
    private author:string= "author";

    private courses:Course[];
    constructor(private router:Router,private coursesService:CourseService){
        this.courses = coursesService.getCourses();


    }

    toCourse(e:any){
        console.log('---------------',e);
        this.coursesService.setCourseNumber(e);
        this.router.navigate(['/course',e]);
    }


    ngOnInit(): void {

//        this.courses_info.push( {title:"math",author:"Johnson",id:"1"},{title:"physic",author:"Schwartz",id:"2" });


        console.log('homehead ',this.courses.length);
    }




}
