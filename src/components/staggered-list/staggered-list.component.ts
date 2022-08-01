import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staggered-list',
  templateUrl: './staggered-list.component.html',
  styleUrls: ['./staggered-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(
          ':leave',
          [
            stagger(150, [
              animate(
                '300ms',
                style({ opacity: 0, transform: 'translateY(30px)' })
              ),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(30px)' }),
            stagger(300, [
              animate(
                '450ms',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class StaggeredListComponent {
  private lastId = 0;

  list: ListItem[] = [];

  onSubmit($event: Event): void {
    const inputElement = $event.target as HTMLInputElement;

    this.addItem(inputElement.value);

    inputElement.value = '';
  }

  addItems(count: number): void {
    for (let i = 0; i < count; i++) {
      this.addItem(`Generated Item ${this.lastId + 1}`);
    }
  }

  onDeleteClicked(item: ListItem): void {
    const index = this.list.findIndex((r) => r.id === item.id);
    this.list.splice(index, 1);
  }

  private addItem(value: string): void {
    this.list.push(new ListItem(++this.lastId, value));
  }
}

class ListItem {
  constructor(public id: number, public label: string) {}
}
