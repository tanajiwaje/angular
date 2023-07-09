import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    template:`
    <h2>welcome to parent component</h2>
    <app-output-child title="Button1" (btnclick)="Call($event)"></app-output-child>
    <app-output-child title="Button2" (btnclick)="Call($event)"></app-output-child>
    <app-output-child title="Button3" (btnclick)="Call($event)"></app-output-child>
    <app-output-child title="Button4" (btnclick)="Call($event)"></app-output-child>
    <app-output-child title="Button5" (btnclick)="Call($event)"></app-output-child>
     <h2>{{msg}}</h2>

    `
})

export class OutputParentClass{
    msg:any=10;
    Call(p:any)
{
     this.msg=p;
}
}