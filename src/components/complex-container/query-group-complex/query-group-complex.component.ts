import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-group-complex',
  templateUrl: './query-group-complex.component.html',
  styleUrls: ['./query-group-complex.component.css'],
  animations: [
    trigger('animatedContainer', [
      state('false', style({ opacity: 0 })),
      transition('* => true', [
        group([
          animate('5000ms', style({ transform: 'scale(1.8)' })),
          animate(
            '300ms',
            style({ opacity: 1, color: 'green', transform: 'scale(1.8)' })
          ),
        ]),
      ]),
    ]),
  ],
})
export class QueryGroupComplexComponent {
  isGood = false;
}
