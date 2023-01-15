import { Component, Input } from '@angular/core';
import { Movies } from '../../../core/types/movies.interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() movies: Movies[] = [];
}
