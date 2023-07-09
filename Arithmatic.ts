import { Injectable } from "@angular/core";

@Injectable()
export class ArithmaticOperation{

    Addition(num1:any,num2:any):any{
         var c=Number(num1)+Number(num2);
         return c;
    }

    substration(num1:any,num2:any):any{
        var c=Number(num1)-Number(num2);
        return c;
   }

   Multiplication(num1:any,num2:any):any{
    var c=Number(num1)*Number(num2);
    return c;
   }
   
    Division(num1:any,num2:any):any{
        var c=Number(num1)/Number(num2);
        return c;
   }
}


