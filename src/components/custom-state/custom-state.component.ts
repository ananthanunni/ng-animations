import { animate, state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

enum CardStatus {
  ReadyToDevelop,
  InProgress,
  CodeReview,
  PushedBack,
  Testing,
  Approval,
}

@Component({
  selector: 'app-custom-state',
  templateUrl: './custom-state.component.html',
  styleUrls: ['./custom-state.component.css'],
  animations: [
    trigger('jiraCard', [
      state(
        CardStatus.ReadyToDevelop.toString(),
        style({ backgroundColor: 'grey', marginLeft: 0 })
      ),
      state(
        CardStatus.InProgress.toString(),
        style({ backgroundColor: 'lightblue', marginLeft: '10%' })
      ),
      state(
        CardStatus.CodeReview.toString(),
        style({ backgroundColor: 'purple', marginLeft: '30%' })
      ),
      state(
        CardStatus.PushedBack.toString(),
        style({ backgroundColor: 'red', marginLeft: '20%' })
      ),
      state(
        CardStatus.Testing.toString(),
        style({ backgroundColor: 'lightgreen', marginLeft: '50%' })
      ),
      state(
        CardStatus.Approval.toString(),
        style({ backgroundColor: 'green', marginLeft: '70%' })
      ),
      animate('300ms ease-in-out'),
    ]),
  ],
})
export class CustomStateComponent {
  CardStatus = CardStatus;

  status = CardStatus.ReadyToDevelop;
}
