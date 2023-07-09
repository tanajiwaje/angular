import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'app-root',
    templateUrl:'Employee.html'
})

export class EmployeeComponentClass{
    employee_id:any;
    employee_name:any;
    email_address:any;
    mobile_number:any;
    designation:any;
    salary:any;
    msg:any;
    employee:any=[];
    constructor(private http:HttpClient)
    {
       this.GetEmployee();
    }

    GetEmployee(){
        this.http.get("https://ciitinstitute.com/api/dummyemployee").subscribe(e=>{
            this.employee=e;
        })
    }


    AddEmployee(ename:any,email:any,mob:any,des:any,sal:any)
    {
        var st={
            "employee_name":ename,
            "designation":des,
            "salary":sal,
            "email_address":email,
            "mobile_number":mob
        }
        this.http.post("https://ciitinstitute.com/api/dummyemployee",st).subscribe(e=>{
            this.msg=e;
            this.GetEmployee();
        })
    }
}