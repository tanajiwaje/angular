import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import  {demopineComponent} from './demoPipesComponent';
import { squrepipeclass } from "./squrePipe";
import { PowerPipeClass } from "./PowerPipe";


@NgModule({
    imports:[BrowserModule],
    declarations:[demopineComponent,squrepipeclass,PowerPipeClass],
    bootstrap:[demopineComponent]
})

export class demoModule{


}