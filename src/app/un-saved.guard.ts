import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentsComponent } from './payments/payments.component';

@Injectable({
  providedIn: 'root',
})
export class UnSavedGuard implements CanDeactivate<PaymentsComponent> {
  canDeactivate(component: PaymentsComponent): boolean {
    return true;
  }
}
