import {
  animate,
  group,
  query,
  stagger,
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
      state('true', style({ transform: 'scale(1.8)' })),
      transition('* => true', [
        query('h1', style({ color: 'red' })),
        query('h2', style({ color: 'green' })),
        group([
          animate('6000ms', style({ transform: 'scale(1.8)' })),
          animate('300ms', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class QueryGroupComplexComponent {
  isGood = false;
}
