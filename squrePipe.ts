import {PipeTransform,Pipe} from '@angular/core';
@Pipe({name:'square'})


export class squrepipeclass implements PipeTransform{
  
    transform(a:any):any {
        var res=a*a;
        return res;
    }

  

    

}