import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    templateUrl:'./formDisplay.html'
})

export class formComponent{
    eid:any;
    ename:any;
    emp:any=[];
    Display(id:any,name:any)
    {
         var eid=id;
         var ename=name;
         var st={"eid":eid,"ename":ename};
         this.emp.push(st);
         this.eid="";
         this.ename="";
        
    }
}