import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent} from './DemoComponent'

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule],
  bootstrap: [DemoComponent]
})
export class DemoModule {

 }