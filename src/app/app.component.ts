import { Component } from '@angular/core';
import { LoginForm, AuthControllerService } from './shared/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent {
  title = 'app';

  loginForm : LoginForm;

  constructor(private authApi: AuthControllerService) {}

  ngOnInit() {
    // login and recover a JWT      
    this.loginForm = {};
    this.loginForm.username = 'admin';
    this.loginForm.password = 'thingtrack';

    this.authApi.authenticateUserUsingPOST(this.loginForm).subscribe(data => {
      let xxx = data;
    });
  }
}