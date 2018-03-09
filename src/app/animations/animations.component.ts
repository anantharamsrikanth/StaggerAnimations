import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
    template:
  `<p>
    Select a title to set on the current HTML document:
  </p>
 
  <ul>
    <li><a (click)="setTitle( 'Good morning!' )">Good morning</a>.</li>
    <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
    <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  </ul>
  `,
  styleUrls: ['./animations.component.css'],
  
  animations:[
    trigger('boxanimate', [
      transition('*=>*',[
        query('.box', style({opacity:0, transform:'translateY(0px)', offset:0}),{optional:true}),
        query('.box', stagger('800ms', [
          animate('1300ms 1s ease-in', keyframes([
            style({opacity:0, transform:'translateY(-80px)', offset:0.1}),
            style({opacity:0.3, transform:'translateY(40px)', offset:0.7}),
            // style({opacity:0.5, transform:'translateY(3px)', offset:0.5}),
            // style({opacity:0.8, transform:'translateY(-5px)', offset:0.8}),
            style({opacity:1, transform:'translateY(0px)', offset:1})
          ]))
        ]),{optional:true})
      ])
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  // constructor() { }
  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: 'angular') {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
  }

}