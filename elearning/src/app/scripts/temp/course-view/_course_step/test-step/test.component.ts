import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../../../_services/_course/course.service";
import { TestService } from "../../../_services/_course/test.service";
import { Subscription } from "rxjs";
import { Answer, Test } from "../../../_models/steps/test";

@Component({

    selector: 'test',
    templateUrl: './test.html',


    styles: ['.selected {color: OrangeRed;}']
})

export class TestComponent1 implements OnInit {

    private subscription: Subscription;
    private page_number: any;
    private test: Test;
    private user_test:Test;

    private isClicked: boolean = false;
    private isCorrect: boolean = false;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private textService: TestService,) {

        this.subscription = activateRoute.params.subscribe(params => {
            this.page_number = params['id'];
            console.log('test', this.page_number);
            let page = courseService.getCourses()[this.courseService.getCourseNumber()].pages[this.page_number];
            this.test = this.textService.getTests()[page.id];
            this.user_test = {
                id: this.test.id,
                question: this.test.question,
                answers: []
            };

            this.test.answers.forEach(
                (e) => {
                    this.user_test.answers.push({ answer: e.answer, isCorrect: false });
                }
            )
            this.isClicked = false;
            //this.user_test.answers.forEach(e=>e.isCorrect=false);

        });
    }

    onCheck() {

        this.isClicked = true;
        //this.isCorrect=!this.isCorrect;
        this.user_test.answers.forEach(a => {
            console.log(a);
        });

        let isCorr = true;
        this.isCorrect = true;
        for (let i = 0; i < this.test.answers.length; i++) {

            console.log('test failed ', isCorr, ' ', this.isCorrect);
            if (this.user_test.answers[i].isCorrect != this.test.answers[i].isCorrect) {
                //isCorr= false;
                console.log('test failed ', isCorr, ' ', this.isCorrect);
                this.isCorrect = false;
                break;
            }

        }

        console.log('----test info compare----');
        this.user_test.answers.forEach(e => {
            console.log(e.isCorrect)
        });
        this.test.answers.forEach(e => {
            console.log(e.isCorrect)
        });
        console.log('--------------');


        // this.isCorrect=isCorr;

        // console.log('test failed ',isCorr ,' last ',this.isCorrect);
    }


    ngOnInit(): void {

        //this.questionService.getQuestion();
        this.correctAnswears.add("1");
        //  this.qserv.getQuestion().subscribe((data:Response)=>this.quefromserv=new Question(data.json().question));
        //this.correctAnswears.add(2);

    }


    private quefromservString: string = "";


    private correctAnswears: Set<any> = new Set();

    private log: string = '';
    private testinfo: string = '';


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
        } else {
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
