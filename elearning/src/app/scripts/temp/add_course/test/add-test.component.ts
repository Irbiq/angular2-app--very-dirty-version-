
import { Component } from "@angular/core";
import { Event } from "@angular/platform-browser/src/facade/browser";
import { ReplaySubject, Subject } from "rxjs";
import { Answer, Test } from "../../_models/steps/test";
import { TestService } from "../../_services/_course/test.service";
import { CourseService } from "../../_services/_course/course.service";
@Component({
    selector: "add-test",
    templateUrl : 'add-test.html',
    styles:[require('./styles.css').toString()],

})
export class AddTestComponent{

    private test:Test; //[{question:'qwer'},[{answer:'ans1'},{answer:'ans1'}]];
    //private answer:Answer = {answer:'ans',isCorrect:true};

    private question:string='';
    private answers:Answer[]=[];

    private test_subj:ReplaySubject<Test>;


    constructor(private testService:TestService, private courseService:CourseService){}

    private onSubmit(){
            this.test_subj= new ReplaySubject(1);
            let test:Test = new Test;
            test.question=this.question;
            test.answers=this.answers;
            test.id = this.testService.getTests().length;
            this.test_subj.next(test);
            this.test_subj.subscribe(e=>{console.log(e)});
            console.log('--------------------',test.question);

        let _id = this.testService.getTests().length;
        this.testService.getTests().push({id:_id,question:test.question,answers:test.answers});
        this.courseService.getTempCourse().pages.push({id:_id,type:'test-view'});
        console.log(test.question,'  ',_id,' ',this.courseService.getTempCourse().pages.length,'&&&&');

        console.log(JSON.stringify(this.testService.getTests()[this.testService.getTests().length-1]));

    }

    private onAddQuestion(){

        this.answers.push({answer:'',isCorrect:true});
        let i =0;
        this.answers.forEach(e=>{console.log(e.isCorrect,'--',i++,' ',e.answer)})
        console.log(this.question);
    }
    private  onChange(i:any){
        console.log(i);
        this.answers[i].isCorrect=(!this.answers[i].isCorrect);

     }

     private onInput(i:any,e:any){
        console.log(this.answers[i].answer);
        this.answers[i].answer=e.value;
        console.log('---',e.value);
     }

}

