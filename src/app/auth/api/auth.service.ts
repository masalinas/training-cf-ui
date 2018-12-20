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

    public login(username: string, password: string): Observable<any> {        
        this.loginForm = {};
        this.loginForm.username = username;
        this.loginForm.password = password;

        return this.authControllerService.authenticateUserUsingPOST(this.loginForm);
    }        
}