import {Component} from '@angular/core';

import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { CourseService } from "../_services/_course/course.service";
@Component({
    selector : "my-course",
    templateUrl: './course.html',
    //styles:[require('../pages/homehead.css').toString()]
})
export class CourseComponent1 {

    courses : any;
    constructor(private router:Router,courseService:CourseService){

       /* courseService.getCourses().subscribe( e => this.courses=e);
        console.log(this.courses)*/

    }


    /*pageChange(){

        this.router..navigate(["/"]);

    }*/

}
