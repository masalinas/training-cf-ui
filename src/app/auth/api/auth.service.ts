import { Inject, Injectable, Optional } from '@angular/core';

import { LoginForm, AuthControllerService } from '../../shared/sdk'
import { Configuration } from '../../shared/sdk/configuration';

@Injectable()
export class AuthService {
    private configuration: Configuration;
    private loginForm : LoginForm;

    constructor(private authControllerService: AuthControllerService) { }

    public getConfiguration() : Configuration {
        return this.configuration;
    }

    public login(username: String, password: String) {
        this.loginForm = {};
        this.loginForm.username = 'admin';
        this.loginForm.password = 'thingtrack';

        this.authControllerService.authenticateUserUsingPOST(this.loginForm).subscribe(data => {
            this.configuration = data;

            return data;
        });
    }        
}