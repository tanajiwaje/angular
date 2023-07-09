import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AboutComponent } from "./AboutComponent";
import { HomeComponentClass } from "./HomeComponent";
import { MainComponentClass } from "./MainComponent";
import {RouterModule} from '@angular/router';

const myroute:any=[
    {path:'home',component:HomeComponentClass},
    {path:'about',component:AboutComponent}
]

@NgModule({
   imports:[BrowserModule,RouterModule.forRoot(myroute)],
   declarations:[MainComponentClass,HomeComponentClass,AboutComponent],
   bootstrap:[MainComponentClass]
})

export class MainModuleClass{


}