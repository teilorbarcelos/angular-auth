import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['admin']">Admin</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'angular-auth'
}
