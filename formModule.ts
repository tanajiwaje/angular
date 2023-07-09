import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {formComponent} from './formComponent'
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[formComponent],
    bootstrap:[formComponent]


})

export class formModule{

}