import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="wrapper">
      <app-navigation></app-navigation>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppLayoutComponent {
}
