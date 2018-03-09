import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
// import { AnimateComponent } from './animate/animate.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    // AnimateComponen
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
