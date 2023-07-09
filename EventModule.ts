import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Mycompound } from 'src/Project/ProjectComponent';

import { MyComponent } from './EventComponent';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,FormsModule
      ],
  declarations: [
    MyComponent
  ],
 
  providers: [],
  bootstrap: [MyComponent]
})
export class MyModule { }