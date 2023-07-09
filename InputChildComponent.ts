import { Component, Input } from "@angular/core";

@Component({
    selector:'app-input-child',
    templateUrl:'Input.html'
})

export class InputChildClass{
   
    @Input()
    msg:any=0;

    @Input()
    data:any=[];
}