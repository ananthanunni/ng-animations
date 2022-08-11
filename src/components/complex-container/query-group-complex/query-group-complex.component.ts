import {
  animate,
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
        query(':self', [animate('1200ms', style({ color: 'red' }))], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class QueryGroupComplexComponent {
  isVisible = false;
}
