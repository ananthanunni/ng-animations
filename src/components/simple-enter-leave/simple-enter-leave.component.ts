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
        animate(
          '1200ms ease-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '1200ms ease-out',
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
    this.appendLog(`Animation .start callback.`);
  }

  onAnimationDone(): void {
    this.appendLog(`Animation .done callback.`);
  }

  private appendLog(message: String): void {
    const now = new Date();
    this.logs.push(
      `(@${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}) :: ${message}`
    );
  }
}
