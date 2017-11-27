
import { Task } from "../../_models/steps/task";
import { Injectable } from "@angular/core";

@Injectable()
export class TaskService{

    private id:any ;
    private tasks:Task[]=[];

    getTasks(){

        return this.tasks;
    }



}
