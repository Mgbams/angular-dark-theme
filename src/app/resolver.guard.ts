import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class ResolverGuard implements Resolve<User> {
  // Note, normally you get this data using your service
  obj = {
    id: 1,
    name: 'kingsley',
  };

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.obj;
  }
}
