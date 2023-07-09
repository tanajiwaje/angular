import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'Power'})


export class PowerPipeClass implements PipeTransform {
  transform(a:any,b:any):any {
      var res=Math.pow(a,b);
      return res;
  }

}