
import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../../../_services/_course/course.service";
import { TaskService } from "../../../_services/_course/task.service";
import { Subscription } from "rxjs";
import { Task } from "../../../_models/steps/task";

var FuzzySet = require('./fuzzyset');
@Component({

  selector:'task',
  templateUrl: './task.html',

})
export class TaskComponent implements OnDestroy{



  private subscription:Subscription;
  private page_number:any;
  private task:Task;

  private answer:any;
  private tolerance_rate:number;

  private isCorrect:boolean=false;
  private isClicked:boolean=false;
  
  constructor(private activateRoute:ActivatedRoute,private courseService:CourseService,private taskService:TaskService){
    this.subscription = activateRoute.params.subscribe(params => {
      this.page_number = params['id'];
      let page = courseService.getTempCourse().pages[this.page_number];
      console.log(this.page_number);
      // this.text = textService.getTexts()[this.id].text;
      this.task = taskService.getTasks()[page.id];
      this.isCorrect = false;
      this.isClicked=false;
    });
  }


  onCheck(){

    console.log('-------')
    this.isClicked=true;
    let fs = new FuzzySet([this.task.answer.toLowerCase()]);
    this.tolerance_rate = fs.get(this.answer.toString().toLowerCase());

    //fs.get(this.answer.toString().toLowerCase());

    console.log(this.task.question.toLowerCase());
    console.log(this.task.answer.toLowerCase());
    console.log(this.answer.toString().toLowerCase());
    console.log(this.tolerance_rate);
    if(this.tolerance_rate>=this.task.t_rate){
      this.isCorrect = true;
      console.log(this.isCorrect);
    }else{
      this.isCorrect = false;
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

