
import { Component } from "@angular/core";
import { TextService } from "../../_services/_course/text.service";
import { CourseService } from "../../_services/_course/course.service";

@Component({
    selector: "add-text",
    templateUrl : 'add-text.html'
})
export class AddTextComponent{

    private text:string='';

    constructor(private textService:TextService,private courseService:CourseService){

    }

    onAddText(){
        /*id:getSize+1*/

        let _id = this.textService.getTexts().length;

        this.textService.getTexts().push({id:_id,text:this.text});
        this.courseService.getTempCourse().pages.push({id:_id,type:'text-view'});
        console.log(this.text,'  ',_id,' ',this.courseService.getTempCourse().pages.length,'&&&&');


        console.log(JSON.stringify(this.textService.getTexts()[this.textService.getTexts().length-1]));
    }


}