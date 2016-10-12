import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/charts" routerLinkActive="active">Charts</a>
      <a routerLink="/theory" routerLinkActive="active">Theory</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'TOPT Project 18';
}

