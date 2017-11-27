import { Component } from "@angular/core";
import { Router, ActivatedRoute, Route } from "@angular/router";
import { Subscription } from "rxjs";
import { TextService } from "../../_services/_course/text.service";
import { CourseService } from "../../_services/_course/course.service";
import { Page } from "../../_models/course/page";
@Component({
    selector: "steps",
    templateUrl: './add-course.html',
    styles:[require('./add-course.css').toString()],

})
export class AddCourseComponent {

/*

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
*/

    private pages:Page[] = [ ];
    private links : Array<any> = [{id:1},{id:2},{id:3}];


    constructor(private courseService:CourseService ,private textService:TextService, private router:Router){

        /*this.pages.push({id:'1',type:'video-view'});
        this.pages.push({id:'1',type:'text-view'});
        this.pages.push({id:'1',type:'task-view'});
        */

        this.pages = this.courseService.getTempCourse().pages;
        console.log('in add-course component constr',this.pages.length);

    };


    onAddCourse(){

        this.courseService.saveTempCourse();
        console.log('in add-course component',this.pages.length);
        console.log("******");

        console.log(JSON.stringify( this.courseService.getCourses()));
        this.router.navigate(['/']);

    }

}
/*

class Page {

    id:string;
    type:string;
}*/
