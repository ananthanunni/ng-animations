import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = [
    new ExampleItemOption(Example.SimpleEnterLeave, 'Simple Enter Leave'),
    new ExampleItemOption(Example.StaggerList, 'Stagger List'),
  ];
  Example = Example;

  activeExample = Example.SimpleEnterLeave;
}

enum Example {
  SimpleEnterLeave,
  StaggerList,
}

class ExampleItemOption {
  constructor(public example: Example, public title: string) {}
}
