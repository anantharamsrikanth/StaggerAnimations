import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:
  // `<p>
  //   Select a title to set on the current HTML document:
  // </p>
 
  // <ul>
  //   <li><a (click)="setTitle( 'Good morning!' )">Good morning</a>.</li>
  //   <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
  //   <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  // </ul>
  // `,
  styleUrls: ['./app.component.css'],
  
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ]),
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({opacity:0, transform:'translateX(-75px)'}),{optional:true}),
        query('.col', stagger('500ms', [
          animate('2s ease-in', keyframes([
            style({opacity:1,transform:'translateX(0px)', offset:0}),
            style({opacity:0.5,transform:'translateX(0px)', offset:0.3}),
            style({opacity:0,transform:'translateX(0px)', offset:1})
          ]))
        ]))
      ])
    ])
    // trigger('explainerAnim', [
    //   transition('* => *', [
    //     query('.col', style({ opacity: 0, transform: 'translateX(-40px)' }), {optional: true}),

    //     query('.col', stagger('500ms', [
    //       animate('800ms 1s ease-in', keyframes([
    //         style({ opacity: 1, transform: 'translateX(0)' })
    //       ])),
    //     ]),{optional: true}),

       
        
    //   ])
    // ])
  ],
})
export class AppComponent {
  // public constructor(private titleService: Title ) { }

  // public setTitle( newTitle: 'angular') {
  //   this.titleService.setTitle( newTitle );
  // }
}



//   items = [];
//   constructor(){
//     this.items = ['the first element','defaultlist item','list item2','list item3','the first element','defaultlist item','list item2','list item3'];
//   }
//   pushItem() {
//     this.items.push('Oh yeah that is awesome');
//     console.log(this.items);
//   }
//   removeItem() {
//     this.items.pop();
//   }
// }
