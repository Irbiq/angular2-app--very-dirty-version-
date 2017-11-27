import { Component, OnDestroy } from '@angular/core';

import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../_services/_course/course.service";
import { TextService } from "../_services/_course/text.service";
import { Subscription } from "rxjs";
import { Course } from "../_models/course/course";
@Component({
    selector : "my-course",
    templateUrl: './course.html',
    //styles:[require('../pages/homehead.css').toString()]
})
export class CourseComponent implements OnDestroy{
    ngOnDestroy(): void {
        //this.courseService.setCourseNumber(null);
        this.subscription.unsubscribe();
    }

    private courses : any;
    private subscription:Subscription;
    private course_number:any;
    private course:Course;

    constructor(private router:Router,private activateRoute: ActivatedRoute, private courseService: CourseService, private textService: TextService,) {


        this.subscription = activateRoute.params.subscribe(params => {
            this.course_number = params['id'];
            console.log('course number ', this.course_number );
            this.course = courseService.getCourseByIndex(this.course_number);
            this.courseService.setCourseNumber(this.course_number);
            console.log(this.course.pages[0].type,'----',this.course.pages[0].id);
            let route = router.url;
            this.router.navigate([this.course.pages[0].type,0],{ relativeTo: this.activateRoute  });
            console.log('--course constructor finished--');

        });
    }


}
