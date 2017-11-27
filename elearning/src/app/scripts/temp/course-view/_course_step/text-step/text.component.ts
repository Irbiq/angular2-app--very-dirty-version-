import { Component, OnDestroy } from "@angular/core";
import { CourseService } from "../../../_services/_course/course.service";
import { TextService } from "../../../_services/_course/text.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({

    selector: 'text',
    templateUrl: './text.html'

})
export class TextComponent1 implements OnDestroy {


    private text: string = '--------';
    private subscription: Subscription;
    private page_number: any = 0;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private textService: TextService) {


        this.subscription = activateRoute.params.subscribe(params => {
            this.page_number = params['id'];
            console.log('text',this.page_number);

            let page = courseService.getCourses()[this.courseService.getCourseNumber()].pages[this.page_number];
            this.text = this.textService.getTexts()[page.id].text;

            /*console.log('страниц ', courseService.getCourses()[this.courseService.getCourseNumber()].pages.length);
            console.log('info о page', page);*/
           // console.log('course number : ',this.courseService.getCourseNumber() ,'id ',page.id ,courseService.getCourses()[this.courseService.getCourseNumber()]);


        });
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    setText(text: string) {
        this.text = text;
    }


}