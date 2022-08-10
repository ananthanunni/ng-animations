import { Component, OnInit } from '@angular/core';

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
})
export class TrafficLightsComponent {
  SignalState = SignalState;

  signalState = SignalState.Off;
}
