import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements  CanActivate {
  private can: boolean = false;

  canActivate() {
    console.log('ActivateGuard#canActivate called, can: ', this.can);
    if (!this.can) {
      alert('Activation blocked');
      return false;
    }

    return true;
  }

  setCanActivate(can) {
    this.can = can;
  }


}
