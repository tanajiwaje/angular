import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    template:`
    <h2>this is Input Parent component</h2>
    <hr>
    <app-input-child msg=20  [data]=[10,20,30,40]></app-input-child>
    <hr>
    <app-input-child msg="helo user"  [data]='["Pune"]'></app-input-child>

    `
})

export class InputParentClass{
  msg:any=10;
}