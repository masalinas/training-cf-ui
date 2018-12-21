import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService} from '../../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    // validate form
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    // check form status
    if (this.validateForm.invalid)
      return;    

    // get access token from login service
    this.authService.login(this.validateForm.controls.userName.value, 
                           this.validateForm.controls.password.value).subscribe(
      credentials => {
        // set credential configuration
        this.authService.setConfiguration(credentials);

        console.log('HTTP response: ' + JSON.stringify(credentials))}, 
      err => {    
        console.log('HTTP Error: ' + err)},
      () => {
        console.log('HTTP request completed.')}
    );
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
