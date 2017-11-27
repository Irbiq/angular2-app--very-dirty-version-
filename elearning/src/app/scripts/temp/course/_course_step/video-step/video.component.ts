import {Component} from "@angular/core";
import { CourseService } from "../../../_services/_course/course.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { VideoService } from "../../../_services/_course/video.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


@Component({

    selector: "my-video",
    templateUrl: `./video.html`,


})
export class VideoComponent {


    //private src: string = '';
    private subscription: Subscription;
    private page_number: any = 0;
    private url:SafeResourceUrl;
    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private videoService: VideoService,domS:DomSanitizer) {

        this.subscription = activateRoute.params.subscribe(params => {
            this.page_number = params['id'];
            let page = courseService.getTempCourse().pages[this.page_number];
            console.log(this.page_number);
            this.url = domS.bypassSecurityTrustResourceUrl(videoService.getVideos()[page.id].src);
            //this.src = videoService.getVideos()[page.id].src;
        });

    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}