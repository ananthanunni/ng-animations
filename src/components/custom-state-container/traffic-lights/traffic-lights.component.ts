import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

enum SignalState {
  Off = 'Off',
  Red = 'Red',
  Amber = 'Amber',
  Green = 'Green',
}

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css'],
  animations: [
    trigger('trafficLight', [
      state(SignalState.Off, style({ borderColor: 'black' })),
      state(SignalState.Red, style({ backgroundColor: '#e90505' })),
      state(SignalState.Amber, style({ backgroundColor: '#fd9c15' })),
      state(SignalState.Green, style({ backgroundColor: '#04b304' })),
      transition(`${SignalState.Off} => *`, [
        animate('300ms cubic-bezier(0,2,.96,-1.61)'),
      ]),
      transition(`* => ${SignalState.Off}`, [animate('2400ms')]),
      transition('* => *', [animate('600ms')]),
    ]),
  ],
})
export class TrafficLightsComponent {
  SignalState = SignalState;

  signalState = SignalState.Off;
}
