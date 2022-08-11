import { query, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-group-complex',
  templateUrl: './query-group-complex.component.html',
  styleUrls: ['./query-group-complex.component.css'],
  animations: [
    trigger('animatedList', [
      //query(:)
    ]),
  ],
})
export class QueryGroupComplexComponent {
  elements: number[] = [];

  appendElements() {
    const lastElement =
      this.elements.length > 0 ? this.elements[this.elements.length - 1] : 0;

    const newElements: number[] = Array(6)
      .fill(1)
      .map((_, index) => lastElement + 1 + index);
    this.elements.push(...newElements);
  }
}
