import './polyfills';

import {
  ChangeDetectionStrategy,
  Component,
  importProvidersFrom,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then(({ HomeComponent }) => HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about.component').then(({ AboutComponent }) => AboutComponent),
  },
  { path: '**', redirectTo: '' },
] as Routes;

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  template: `
  <h1>Angular Animations</h1>

  <ul [ngSwitch]="activeExample">
    <li
      *ngFor="let option of options"
      [ngClass]="{ active: option.example === activeExample }"
      (click)="activeExample = option.example"
    >
      {{ option.title }}
    </li>
  </ul>
  `,
  styles: [
    `
    ul {
      list-style-type: none;
    
      li {
        display: inline;
        padding: 6px;
        background: #aaa;
        margin-right: 1px;
        transition-duration: 0.3s;
        cursor: pointer;
    
        &.active {
          background: none;
          color: #aaa;
          cursor: default;
        }
      }
    }    
    `,
  ],
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


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
    ]),
  ],
})
  .then((ref) => {
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch((err) => console.error(err));
