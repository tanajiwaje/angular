import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {LoginComponentClass} from './LoginComponent'

@NgModule({
    imports:[BrowserModule],
    declarations:[LoginComponentClass],
    bootstrap:[LoginComponentClass]
})

export class LoginModuleclass{

}