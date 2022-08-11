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
      state('false', style({ transform: 'scale(0)', opacity: 0.2 })),
      state('true', style({ transform: 'scale(1.2)', color: 'turquoise' })),
      transition(':enter', animate(0)),
      transition('* => true', [
        query('h1', style({ color: 'red' })),
        query('h2', style({ color: 'green' })),
        group([
          animate('1200ms', style({ transform: 'scale(1.2)' })),
          animate('3000ms', style({ opacity: 1 })),
        ]),
      ]),
      transition('* => false', [
        query(
          'h1',
          animate('300ms', style({ marginLeft: '-100%', opacity: 0.2 }))
        ),
        query(
          'h2,h3',
          stagger(
            '300ms',
            animate('300ms', style({ marginRight: '-100%', opacity: 0.2 }))
          )
        ),
      ]),
    ]),
  ],
})
export class QueryGroupComplexComponent {
  state = false;
}
