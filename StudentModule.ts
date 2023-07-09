import { NgModule } from "@angular/core";
import { ExamClass } from "./ExamComponent";
import { AdmissionClass } from "./AdmissionComponent";
import { Studentclass } from "./StudentComponent";
import { RouterModule} from "@angular/router";

const myroutes:any=[
    {path:'',component:Studentclass},
    {path:'exam',component:ExamClass},
    {path:'admission',component:AdmissionClass}
]

@NgModule({
  imports:[RouterModule.forChild(myroutes)],
  declarations:[Studentclass,ExamClass,AdmissionClass]
})

export class studentModuleClass{

}