import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthControllerService, ConfigurationParameters } from '../../shared/sdk'

/** import angular environment variables **/
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    constructor(private authControllerService: AuthControllerService) { }

    public setConfiguration(credentials) {
        const params: ConfigurationParameters = {
            basePath: environment.basePath,
            username: credentials.username,
            accessToken: credentials.accessToken,
            withCredentials: false
        }

        // save in localstorage my configuration
        localStorage.setItem('params', JSON.stringify(params));
    }

    public login(username: string, password: string): Observable<any> {
        return this.authControllerService.authenticateUserUsingPOST({username: username, password: password});
    }        
}