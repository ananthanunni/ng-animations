import { state, style, trigger } from '@angular/animations';
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
        style({ backgroundColor: 'grey' })
      ),
    ]),
  ],
})
export class CustomStateComponent {
  CardStatus = CardStatus;

  status = CardStatus.ReadyToDevelop;
}
