import { Inject, Injectable, Optional } from '@angular/core';

import { Observable }                                        from 'rxjs';

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

    public login(username: String, password: String): Observable<any> {
        this.loginForm = {};
        this.loginForm.username = 'admin';
        this.loginForm.password = 'thingtrack';

        return this.authControllerService.authenticateUserUsingPOST(this.loginForm);
    }        
}