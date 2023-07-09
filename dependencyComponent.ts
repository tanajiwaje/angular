import { Component } from "@angular/core";
import { observeNotification } from "rxjs/internal/Notification";
import {ArithmaticOperation} from './Arithmatic'

@Component({
    selector:'app-root',
    templateUrl:'./dependecy.html'
})

export class dependencyClass{
  addresult:any;
  subresult:any;
  multiresult:any;
  divresult:any;
  num1:any;
  num2:any;
  result:any;


  op=new ArithmaticOperation();
  
  add(no1:any,no2:any)
  {
      this.result= this.op.Addition(no1,no2);
  }

  sub(no1:any,no2:any)
  {
      this.result= this.op.substration(no1,no2);
  }

  multi(no1:any,no2:any)
  {
      this.result= this.op.Multiplication(no1,no2);
  }
  div(no1:any,no2:any)
  {
      this.result= this.op.Division(no1,no2);
  }


  constructor()
  {
    
     this.addresult=this.op.Addition(this.num1,this.num2);
     this.subresult=this.op.substration(20,40);
     this.multiresult=this.op.Multiplication(20,40);
     this.divresult=this.op.Division(20,40);

  }
}