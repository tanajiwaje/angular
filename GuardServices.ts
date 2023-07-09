



import {Injectable} from "@angular/core"
import {CanActivate} from "@angular/router"
@Injectable()
export class GuardServiceClass implements CanActivate {

    canActivate():any{
       return false; 
    }
}
