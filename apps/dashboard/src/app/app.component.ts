import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Customer Dashboard';

  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/meals', icon: 'view_list', title: 'meals' },
    { path: '/foodies', icon: 'account_circle', title: 'foodies' },
  ];

  isAuthenticated$: Observable<boolean> = of(true);
  sidenavStatus = SidenavStatus.OPENED;
}
