import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = [
    new ExampleItemOption(Example.SimpleEnterLeave, 'Simple Enter Leave'),
    new ExampleItemOption(Example.CustomState, 'Custom State'),
    new ExampleItemOption(Example.StaggerList, 'Stagger List'),
  ];
  Example = Example;

  activeExample = Example.CustomState;
}

enum Example {
  SimpleEnterLeave,
  CustomState,
  StaggerList,
}

class ExampleItemOption {
  constructor(public example: Example, public title: string) {}
}
