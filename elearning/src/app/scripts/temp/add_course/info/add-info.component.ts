
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "../../_services/_course/course.service";
import { Course } from "../../_models/course/course";

@Component({
    selector: "add-course-info",
    templateUrl: 'course-info.html'
})

export class AddCourseInfoComponent {

    private title:string='';
    private author:string='';
    constructor(private router:Router,private courseService:CourseService) { };

    onNext(){
        let course:Course = { course_info: {title:this.title,author:this.author},pages:[]};
        this.courseService.setTempCourse(course);
        this.router.navigate(['/steps']);
    }

    onCancel(){
        this.router.navigate(['/']);
    }

}