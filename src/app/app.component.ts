import { Component } from '@angular/core';
import { ActivateGuard } from './activate.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private activateGuard: ActivateGuard) { }
  checkboxChanged(canActivate) {
    // Update guard when checkbox checked.
    this.activateGuard.setCanActivate(canActivate);
  }

}
