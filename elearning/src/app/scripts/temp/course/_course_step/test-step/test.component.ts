import {Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { CourseService } from "../../../_services/_course/course.service";
import { TestService } from "../../../_services/_course/test.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Test } from "../../../_models/steps/test";

@Component({

    selector: 'test',
    templateUrl: `./test.html`,


    styles: ['.selected {color: OrangeRed;}']
})
export class TestComponent implements OnInit {

    ngOnInit(): void {

        //this.questionService.getQuestion();
        this.correctAnswears.add("1");
      //  this.qserv.getQuestion().subscribe((data:Response)=>this.quefromserv=new Question(data.json().question));
        //this.correctAnswears.add(2);

    }


    private subscription:Subscription;
    private page_number:any;
    private test:Test;
    constructor(private activateRoute:ActivatedRoute,private courseService:CourseService, private testService:TestService){

        this.subscription = activateRoute.params.subscribe(params => {
            this.page_number = params['id'];
            let page = courseService.getTempCourse().pages[this.page_number];
            console.log(this.page_number);
            // this.text = textService.getTexts()[this.id].text;
            this.test = testService.getTests()[page.id];
        });


    };

    private quefromservString: string="";


    private correctAnswears: Set<any> = new Set();

    private log: string = '';
    private testinfo:string='';


    private infoRadio: string = '';
    private infoCheckbox: string = '';

    private answers: Set<string> = new Set(); //checkboxes
    private answersR: Set<string> = new Set(); //radios

    private ansstr: string = '';
   // private questionService: QuestionsService = new QuestionsService();

    private s: string[] = [];

    private log1() {

        this.checkCheckbox();

        this.checkRadio();



    }


    private checkCheckbox() {
        this.log = "asdasd";
        if (this.answers.size != this.correctAnswears.size) {
            this.infoCheckbox = "false size";
            return false;
        } else {
            var result = true;
            this.answers.forEach(
                (value) => {
                    if (this.correctAnswears.has(value) == false) {
                        this.infoCheckbox = "false in answer";
                        result = false;
                    }
                }
            )
            if (result == true) {
                this.infoCheckbox = "true";
            } else {
                this.infoCheckbox += " false"
            }
        }
    }

    private checkRadio() {

        if (this.answersR.size != this.correctAnswears.size) {
            this.infoRadio = "false size";
            return false;
        } else {
            var result = true;
            this.answersR.forEach(
                (value) => {
                    if (this.correctAnswears.has(value) == false) {
                        this.infoRadio = "false in answer";
                        result = false;
                    }
                }
            )
            if (result == true) {
                this.infoRadio = "true";
            } else {
                this.infoRadio += " false"
            }
        }
    }


    private logRadio(element: HTMLInputElement): void {
        this.log += `Radio ${element.value} was selected\n`;
        if (element.checked) {
            this.answersR.clear();
            this.answersR.add(element.value);
        } else  {
            if (this.answersR.has(element.value) != false) {
                this.answersR.delete(element.value);
            }
        }


    }

    private logCheckbox(element: HTMLInputElement): void {
        this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
        if (element.checked) {
            this.answers.add(element.value);
        } else if (!element.checked) {
            if (this.answers.has(element.value) != false) {
                this.answers.delete(element.value);
            }
        }
        this.ansstr = '';
        this.answers.forEach(
            (value) => {
                this.ansstr += value;
            }
        )
        this.ansstr += " // ";
        this.correctAnswears.forEach(
            (value) => {
                this.ansstr += value;
            }
        )
        this.log = this.ansstr;
    }


}
