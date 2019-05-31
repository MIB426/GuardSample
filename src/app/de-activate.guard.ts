import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TwoComponent } from './two.component';
@Injectable({
  providedIn: 'root'
})
export class DeActivateGuard implements CanDeactivate<TwoComponent> {
  canDeactivate(component: TwoComponent) {
    let can = component.canDeactivate();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }
    return true;
  }

}
