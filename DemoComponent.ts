import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>demo</h1>',
  templateUrl:'./Demo.html'
})
export class DemoComponent {
  title = 'Demo component 1';
   
   arr:any=[3,4,5,6];

}