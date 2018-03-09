import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// import {RouterModule} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
// import { AnimateComponent } from './animate/animate.component';
import { HeaderComponent} from './header/header.component';
import { ListAnimationComponent} from './list-animation/list-animation.component';
import { Title } from '@angular/platform-browser';
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
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: AnimationsComponent },
      { path: 'boxanimation', component: AnimationsComponent },
      { path: 'listanimation', component: ListAnimationComponent },

    ])
  ],
  providers: [ Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
