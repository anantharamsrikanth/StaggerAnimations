import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
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

  constructor() { }

  ngOnInit() {
  }

}
