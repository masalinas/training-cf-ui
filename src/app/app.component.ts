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
        console.log('Observer got data: ' + data)}, 
      err => {    
        console.log('Observer got error: ' + err)},
      () => {
        console.log('HTTP request completed.')}
    );
  }
}