import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
// import { AnimateComponent } from './animate/animate.component';
import { HeaderComponent} from './header/header.component';
import { ListAnimationComponent} from './list-animation/list-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
<<<<<<< HEAD
    // AnimateComponen
=======
    HeaderComponent,
    ListAnimationComponent
    // AnimateComponent
>>>>>>> 70093e53ce14a675dd03f9690cb997b1f5cd7556
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: AnimationsComponent },
      { path: 'boxanimation', component: AnimationsComponent },
      { path: 'listanimation', component: ListAnimationComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
