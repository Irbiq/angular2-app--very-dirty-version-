import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Test } from "../../_models/steps/test";

@Injectable()
export class TestService{

    /*test:Test;
    private test_subj:ReplaySubject<Test>;

    addTest(test:Test){
        this.test_subj = new ReplaySubject(1);
        this.test_subj.next(test);

    }
    getTest(){

        return this.test_subj;
    }*/
    private id:any;
    private tests:Test[]=[];

    /*
     addtest(test:string){
     this.tests.push()
     }*/

    getId(){
        return this.id;
    }

    getLastId(){

        return this.tests.length;
    }

    getTests(){

        return this.tests;
    }

    getById(id:any){

        return this.tests[id];
    }

    
    
    
    
    
}