import {Injectable} from "@angular/core"
import {CanActivateChild} from "@angular/router"
import { Observable } from "rxjs"
@Injectable()
export class ChildGuardClass implements CanActivateChild{
    canActivateChild():any{
        return false;
    }
}