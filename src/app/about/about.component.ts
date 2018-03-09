import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  // templateUrl: './about.component.html',
  template:
  `<p>
    Select a title to set on the current HTML document:
  </p>
 
  <ul>
    <li><a (click)="setTitle( 'About us' )">About us</a>.</li>
    <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
    <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  </ul>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // constructor() { }
  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: 'angular') {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
  }

}
