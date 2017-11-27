import { Injectable } from "@angular/core";
import { Text } from "../../_models/steps/text";

@Injectable()
export class TextService{

    /*text:string;
    private text_subj:ReplaySubject<Test>;

    addTest(test:Test){
        this.text_subj = new ReplaySubject(1);
        this.text_subj.next(test);

    }
    getTest(){

        return this.text_subj;
    }*/

    private id:any;
    private texts:Text[]=[];

    /*
    addText(text:string){
        this.texts.push()
    }*/

    getId(){
        return this.id;
    }

    getLastId(){

        return this.texts.length;
    }

    getTexts(){

        return this.texts;
    }

    getById(id:any){

        return this.texts[id];
    }


}