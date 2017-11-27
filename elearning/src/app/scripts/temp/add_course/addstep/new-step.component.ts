import { Router } from "@angular/router";
import { Component } from "@angular/core";
/**
 * Created by ASUS on 10.05.2017.
 */


@Component({
    selector: "new-step",
    templateUrl: 'new-step.html'
})

export class NewStepComponent {

    constructor(private router:Router) { };

  /*  onNext(){
        this.router.navigate(['/add_course']);
    }

    onCancel(){
        this.router.navigate(['/']);
    }*/

}