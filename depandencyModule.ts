import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {dependencyClass} from './dependencyComponent'
import {ArithmaticOperation} from './Arithmatic'
import { FormsModule } from "@angular/forms";
//import { formModule } from "src/Forms/formModule";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[dependencyClass],
   bootstrap:[dependencyClass],
   providers:[ArithmaticOperation]

})

export class dependencyModule{


}