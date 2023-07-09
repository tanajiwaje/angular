import { Component } from "@angular/core";

@Component({
    selector:'child-app',
    template:`
    <h2>{{cnt}}</h2>

    `
})

export class ChildClass{
    cnt:any=0;
    Increment(){
        this.cnt=Number(this.cnt)+1;
    }

    Decrement(){
        this.cnt=Number(this.cnt)-1;
    }
}