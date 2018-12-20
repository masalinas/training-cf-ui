import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthControllerService } from '../../shared/sdk'
import { Configuration } from '../../shared/sdk/configuration';

@Injectable()
export class AuthService {
    private configuration: Configuration;

    constructor(private authControllerService: AuthControllerService) { }

    public getConfiguration() : Configuration {
        return this.configuration;
    }

    public login(username: string, password: string): Observable<any> {
        return this.authControllerService.authenticateUserUsingPOST({username: username, password: password});
    }        
}