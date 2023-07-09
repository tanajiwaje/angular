import { Component, Output,EventEmitter, Input } from "@angular/core";

@Component({
    selector:'app-output-child',
    templateUrl:'Output.html'
})

export class OutputChildClass{
    
    @Input()
    title:any="";

    cnt:any;

    @Output()
    btnclick=new EventEmitter();
   // increment(){
    //    this.cnt=Number(this.cnt)+1;
    //    this.btnclick.emit(this.cnt);
   // }

   increment(){
      this.btnclick.emit("you have click on "+this.title)
   }
}