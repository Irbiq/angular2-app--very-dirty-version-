import { Component, OnDestroy } from "@angular/core";
import { CourseService } from "../../../_services/_course/course.service";
import { TextService } from "../../../_services/_course/text.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({

    selector: 'text',
    templateUrl: './text.html'

})
export class TextComponent implements OnDestroy {


    private text: string = '';
    private subscription: Subscription;
    private page_number: any = 0;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private textService: TextService,) {


        this.subscription = activateRoute.params.subscribe(params => {
            console.log('in add page');
            this.page_number = params['id'];
            let page = courseService.getTempCourse().pages[this.page_number];
            console.log(this.page_number);
            // this.text = textService.getTexts()[this.id].text;
            this.text = textService.getTexts()[page.id].text;
        });
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    setText(text: string) {
        this.text = text;
    }


}