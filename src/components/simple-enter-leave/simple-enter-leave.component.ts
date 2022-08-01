import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const enterTransition = transition(':enter', [
  style({ opacity: 0, transform: 'scale(0.6)' }),
  animate('500ms', style({ opacity: 1, transform: 'scale(1)' })),
]);

const leaveTransition = transition(':leave', [
  animate('500ms', style({ opacity: 0, transform: 'scale(0.6)' })),
]);

@Component({
  selector: 'app-simple-enter-leave',
  templateUrl: './simple-enter-leave.component.html',
  styleUrls: ['./simple-enter-leave.component.css'],
  animations: [trigger('targetRectangle', [enterTransition, leaveTransition])],
})
export class SimpleEnterLeaveComponent {
  targetVisible = false;
}
