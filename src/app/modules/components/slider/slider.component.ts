import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../../core/types/movies.interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() movies: Movies[] = [];
  curentSlideIndex: number = 0;

  ngOnInit(): void {
    // increase currentSlider every 5 seconds
    setInterval(() => {
      this.curentSlideIndex++;
    }, 5000);
  }
}
