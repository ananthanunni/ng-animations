import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-enter-leave',
  templateUrl: './simple-enter-leave.component.html',
  styleUrls: ['./simple-enter-leave.component.css'],
  animations: [
    trigger('targetRectangle', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.6)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'scale(0.6)' })
        ),
      ]),
    ]),
  ],
})
export class SimpleEnterLeaveComponent {
  logs: string[] = [];

  targetVisible = false;

  onAnimationStarted(): void {
    this.logs.push(`Animation .start callback.`);
  }

  onAnimationDone(): void {
    this.logs.push(`Animation .done callback.`);
  }
}
