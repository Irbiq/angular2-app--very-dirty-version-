
import { Component } from "@angular/core";
import { CourseService } from "../../_services/_course/course.service";
import { TaskService } from "../../_services/_course/task.service";
var FuzzySet = require('./fuzzyset');

@Component({
    selector: "add-task",
    templateUrl : './add-task.html',
    styles:[require('./styles.css').toString()],

})
export class AddTaskComponent{


    private question:string;
    private answer:any;
    private t_rate:number;


    constructor(private courseService:CourseService,private taskService:TaskService){


    }

    onAdd(){

        let _id = this.taskService.getTasks().length;
        this.taskService.getTasks().push({id:_id,question:this.question,answer:this.answer,t_rate:this.t_rate/100});
        this.courseService.getTempCourse().pages.push({id:_id,type:'task-view'});
/*
        let str:string = this.question;
        let fs = new FuzzySet([this.question]);
        console.log([this.question]);
        console.log([this.answer]);
        console.log(fs.get(this.answer.toString())[0][0]);*/
    }

}