import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  navLinks: Array<any> = [
    {icon: 'dashboard', path: '/dashboard/dashboard', label: 'Dashboard'},
    {icon: 'home', path: '/dashboard/home', label: 'Home'},
    {icon: 'event', path: '/dashboard/event', label: 'Event'},
    {icon: 'account_circle', path: '/dashboard/profile', label: 'Profile'},
  ]

}
