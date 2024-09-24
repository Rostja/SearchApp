import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'SearchApp';
}
