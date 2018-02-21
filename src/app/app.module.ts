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
    HeaderComponent,
    ListAnimationComponent
    // AnimateComponent
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
