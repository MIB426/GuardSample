import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { ActivateGuard } from './activate.guard';
import { DeActivateGuard } from './de-activate.guard';
import { ThreeComponent } from './three.component';
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivateGuard, DeActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
