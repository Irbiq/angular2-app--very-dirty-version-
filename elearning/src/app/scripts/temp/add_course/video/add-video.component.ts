
import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../../_services/_course/course.service";
import { VideoService } from "../../_services/_course/video.service";
@Component({
    selector: "add-video",
    templateUrl : 'add-video.html'
})
export class AddVideoComponent {


    private src:string;
    constructor(private videoService:VideoService,private courseService:CourseService){

    }

    onAdd(){
        /*id:getSize+1*/

        let _id = this.videoService.getVideos().length;

        this.videoService.getVideos().push({id:_id,src:this.src});
        this.courseService.getTempCourse().pages.push({id:_id,type:'video-view'});
        console.log(this.src,'  ',_id,' ',this.courseService.getTempCourse().pages.length,'&&&&');

        console.log(JSON.stringify(this.videoService.getVideos()[this.videoService.getVideos().length-1]));

    }
}