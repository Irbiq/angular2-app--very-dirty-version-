import { Injectable } from "@angular/core";
import { Video } from "../../_models/steps/video";

@Injectable()
export class VideoService{

    src:string;
    /*private src_subj:ReplaySubject<string>;*/
    videos:Video[]=[];



    getVideos(){

        return this.videos;
    }


    /*addVideo(src:string){
        this.src_subj = new ReplaySubject(1);
        this.src_subj.next(src);

    }*/
    /*getVideo(){

        return this.src_subj;
    }*/

}