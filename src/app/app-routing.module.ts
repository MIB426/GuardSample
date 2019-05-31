import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { ActivateGuard } from './activate.guard';
import { DeActivateGuard } from './de-activate.guard';
import { ThreeComponent } from './three.component';
const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: OneComponent },
  {
    path: 'component-two',
    component: TwoComponent,
    canActivate: [ActivateGuard],
    canDeactivate: [DeActivateGuard]
  },
  { path: 'component-three', component: ThreeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
