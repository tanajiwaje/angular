import { Component, ViewChild } from "@angular/core";

import {  ChildClass} from "./ChildComponent";


@Component({
  selector:'app-root',
  template:`
  <h2>welcome to parent Component</h2>
  
  <input type="button" value="Prev" (click)="Prev()">
  <input type="button" value="Next" (click)="Next()">
   
  <child-app></child-app>

  `

})

export class parentClass{
    @ViewChild(ChildClass)
    ch:any;
    
    Prev(){
    this.ch.Decrement();
    }
    Next(){
      this.ch.Increment();
    }
}

