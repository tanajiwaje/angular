import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    templateUrl:'pipe.html'
})

export class demopineComponent{
  name:any="ajay";
  city:any="pune";
  p=0.25;
  dt=new Date();
  amount:any=1234;
  num:any=10;
  a:any=5;

  students:any=[{"rno":1,"name":"amit"},{"rno":2,"name":"amol"}]

}
