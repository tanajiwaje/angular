import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './Event.html',
})
export class MyComponent {
  title = 'FirstAppAngular';
  no1:any;
  no2:any;
  result:any
  ch:any=true;
  Addition(n1:any,n2:any)
  {
        var c=Number(n1)+Number(n2);
        this.result=c;
  }
}
