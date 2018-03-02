import { Component, OnInit } from '@angular/core';
import { fadeInOut } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [fadeInOut]  
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAnimationStart() {
    console.log("onAnimationStart");
  }

  onAnimationEnd() {
      console.log("onAnimationEnd");
  }
}
