
import { Course } from "../../_models/course/course";
import { TextService } from "./text.service";
import { TaskService } from "./task.service";
import { VideoService } from "./video.service";
import { TestService } from "./test.service";
import { Injectable } from "@angular/core";


@Injectable()
export class CourseService{

    private courses:Course[]=[];
    private temp_course:Course;


    constructor(private textService:TextService,
                private videoService:VideoService,
                private testService:TestService,
                private taskService:TaskService){}


    resolvePage(type:string,id:any){
        if(type=='text'){
            this.textService.getById(id);
        }
        if(type=='video'){
           // this.videoService.getById(id);
        }
        if(type=='task'){
           // this.taskService.getById(id);
        }
        if(type=='test'){
           // this.testService.getById(id);
        }

    }
    getCourseByIndex(i:any):Course{

        return this.courses[i];
    }

    getTempCourse(){

        return this.temp_course;
    }

    setTempCourse(t_course:Course){
        this.temp_course=t_course;
    }


    addCourse(course:Course){

        this.courses.push(course);
    }

    getCourses(){

        return this.courses;
    }

    saveTempCourse(){

        this.courses.push(this.temp_course);
        //this.temp_course=null;

    }

    private curr_course:any=0;
    setCourseNumber(cn:any){
        this.curr_course=cn;
    }
    getCourseNumber():any{
       return this.curr_course;
    }

}