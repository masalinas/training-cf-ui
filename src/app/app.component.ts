import { Component } from '@angular/core';

import { AuthService } from './auth/api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Login mockup
    this.authService.login('admin', 'thingtrack').subscribe(
      data => {
        console.log('HTTP response: ' + JSON.stringify(data))}, 
      err => {    
        console.log('HTTP Error: ' + err)},
      () => {
        console.log('HTTP request completed.')}
    );
  }
}