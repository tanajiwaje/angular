import { NgModule } from "@angular/core";
import { Profileclass } from "./ProfileComponent";
import { salaryComponentClass } from "./SalaryComponent";
import { TeacherComponentClass } from "./TeacherComponent";
import {RouterModule} from '@angular/router';

const myroutes:any=[
    {path:'',component:TeacherComponentClass},
    {path:'profile',component:Profileclass},
    {path:'salary',component:salaryComponentClass}
]

@NgModule({
    imports:[RouterModule.forChild(myroutes)],
    declarations:[TeacherComponentClass,Profileclass,salaryComponentClass]
})

export class TeacherModuleClass{

}
