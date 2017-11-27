import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Subject } from "rxjs";

class Page {
    private id: any;
    private type: string;

    constructor(id: any, type: string) {
        this.id = id;
        this.type = type;
    }

}
@Injectable()
class CourseService1 {

    courses = [

        {
            course_info: {
                id: 1,
                title: 'Math',
                author: 'asd'
            },
            pages: [{ id: 1, type: 'video' }, { id: 2, type: 'test' }, { id: 3, type: 'text' }, { id: 4, type: 'task' }]
        },
        {
            course_info: {
                id: 2,
                title: 'Physics',
                author: 'asd'
            },
            pages: [{ id: 1, type: 'video' }, { id: 2, type: 'test' }, { id: 3, type: 'text' }, { id: 4, type: 'task' }]

        },
        {
            course_info: {
                id: 3,
                title: 'Programming',
                author: 'asd'
            },
            pages: [new Page(1, "text"), new Page(2, 'video')]  //[{ id: 1, type: 'video' }, { id: 2, type: 'test' }, { id: 3, type: 'text' }, { id: 4, type: 'task' }]
        }

    ];
    //private cses : Subject<any>;
    private cses: ReplaySubject<any> = new ReplaySubject<any>(1);

    constructor() {
        //this.cses = new Subject();
        this.cses.next(this.courses);
        console.log('in service constr');
    }

    getCourses(): Observable<any> {

        //this.cses.next(this.courses);

        return this.cses.asObservable();
    }

}
/*
 class Test {

 private c_i: Array<any>;

 constructor(private cs: CourseService) {
 cs.getCourses().subscribe(e => {
 this.c_i = e;
 });
 console.log(this.c_i, '-----------------');

 }

 getCourses() {
 this.cs.getCourses();
 console.log(this.c_i.forEach(x => {
 console.log(x)
 }));
 }
 }
 */
/*

 let test = new Test(new CourseService());
 test.getCourses();

 */
