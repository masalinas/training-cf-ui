import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthControllerService, ConfigurationParameters } from '../../shared/sdk'
import { Configuration } from '../../shared/sdk/configuration';

/** import angular environment variables **/
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    private configuration: Configuration;

    constructor(private authControllerService: AuthControllerService) { }

    public getConfiguration() : Configuration {
        return this.configuration;
    }

    public setConfiguration(credentials) {
        let apiKeys:  {[ key: string ]: string} = {};
        credentials["Authorization"] = credentials.Authorization;    
    
        const params: ConfigurationParameters = {
            basePath: environment.basePath,
            username: credentials.username,
            apiKeys: apiKeys,
            accessToken: credentials.accessToken,
            withCredentials: false
        }

        return this.configuration = new Configuration(params);
    }

    public login(username: string, password: string): Observable<any> {
        return this.authControllerService.authenticateUserUsingPOST({username: username, password: password});
    }        
}