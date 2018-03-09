import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
// import { AnimateComponent } from './animate/animate.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: 'home', component: AnimationsComponent },
  { path: 'about', component: AboutComponent }
 
  // { path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
 
];

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    AboutComponent,
    // AnimateComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
