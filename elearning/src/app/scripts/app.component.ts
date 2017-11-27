import { Component } from '@angular/core';
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";
import { Router, RouterOutlet } from "@angular/router";
import { CourseService } from "./temp/_services/_course/course.service";
import { TestService } from "./temp/_services/_course/test.service";
import { TextService } from "./temp/_services/_course/text.service";
import { VideoService } from "./temp/_services/_course/video.service";
import { TaskService } from "./temp/_services/_course/task.service";


@Component({

    selector: "my-app",
    template: `
        <my-nav></my-nav>
        <router-outlet></router-outlet>`,

})
export class AppComponent {

    constructor(private courseService: CourseService, private testService: TestService,
                private textService: TextService, private videoService: VideoService, private taskService:TaskService) {

        this.courseService.setCourseNumber(0);
        this.courseService.getCourses().push({
            course_info: { title: "Физика", author: "Нильс Бор" },
            pages: [{ id: 0, type: "text-view" }, { id: 0, type: "video-view" },
                { id: 0, type: "test-view"}, {id:0,type:"task-view"} ]
        });
        this.testService.getTests().push({
                id: 0,
                question: "2+2 будет ",
                answers: [{ answer: "2", isCorrect: false }, { answer: "не 2", isCorrect: true }, {
                    answer: "4",
                    isCorrect: true
                }, { answer: "4 или не 4", isCorrect: true }]
            }
        );
        this.textService.getTexts().push({ id: 0, text: "Справочная информация " });
        this.videoService.getVideos().push({ id: 0, src: "//www.youtube.com/embed/EVz04VMtUfE" });
        this.taskService.getTasks().push({id:0,question:"Кто стал лауреатом Нобелевской премии по физике в 1962 году",answer:"Ландау Лев",t_rate:0.6});
        /*{"id":0,"question":"Очень интересное условие очень сложной задачи","answer":"правильный ответ","t_rate":0.6}*/


    }
    ;


}
