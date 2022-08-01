import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

enum CardStatus {
  ReadyToDevelop = 'ReadyToDevelop',
  InProgress = 'InProgress',
  CodeReview = 'CodeReview',
  PushedBack = 'PushedBack',
  Testing = 'Testing',
  Approval = 'Approval',
}

@Component({
  selector: 'app-custom-state',
  templateUrl: './custom-state.component.html',
  styleUrls: ['./custom-state.component.css'],
  animations: [
    trigger('jiraCard', [
      state(
        CardStatus.ReadyToDevelop.toString(),
        style({ backgroundColor: 'lightgrey', color: 'grey', marginLeft: 0 })
      ),
      state(
        CardStatus.InProgress.toString(),
        style({
          backgroundColor: 'lightblue',
          color: 'midnightblue',
          marginLeft: '10%',
        })
      ),
      state(
        CardStatus.CodeReview.toString(),
        style({
          backgroundColor: 'mediumpurple',
          color: 'purple',
          marginLeft: '30%',
          borderRadius: 15,
        })
      ),
      state(
        CardStatus.PushedBack.toString(),
        style({
          backgroundColor: 'indianred',
          color: 'darkred',
          marginLeft: '20%',
        })
      ),
      state(
        CardStatus.Testing.toString(),
        style({
          backgroundColor: 'lightgreen',
          color: 'green',
          marginLeft: '50%',
          borderRadius: 60,
        })
      ),
      state(
        CardStatus.Approval.toString(),
        style({
          backgroundColor: 'green',
          color: 'white',
          marginLeft: '70%',
          borderRadius: 150,
        })
      ),
      // Define transitions
      transition(`${CardStatus.ReadyToDevelop} => ${CardStatus.Approval}`, [
        animate('4500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
      ]),
      transition('* => *', [animate('1200ms ease-in-out')]),
    ]),
  ],
})
export class CustomStateComponent {
  CardStatus = CardStatus;

  status = CardStatus.ReadyToDevelop;
}
