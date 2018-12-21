import { NgModule } from '@angular/core';

import { AuthService } from './api/auth.service';

/** import angular envirotment variables **/
import { environment } from '../../environments/environment';

/** import Swagger providers **/
import { ApiModule, Configuration, ConfigurationParameters } from '../shared/sdk';

export function apiConfigFactory (): Configuration {
    // recover params credentials if exist
    let params = localStorage.getItem('params');

    if (params == null)
        return null;

    let result = JSON.parse(params);

    // create Configuration Parameters
    let credentials:  {[ key: string ]: string} = {};
    credentials["Authorization"] = 'Bearer ' + result.accessToken;    

    const configurationParameters: ConfigurationParameters = {
        basePath: result.basePath,
        username: result.username,
        apiKeys: credentials,
        accessToken: 'Bearer ' + result.accessToken,
        withCredentials: false
      }
    
    // return configuration
    return new Configuration(configurationParameters);
}

@NgModule({
    imports: [
        ApiModule.forRoot(apiConfigFactory)
    ],
    providers: [ AuthService ],
    declarations: [],             
    bootstrap: []
  })
export class AuthModule {
    constructor(private authService: AuthService) { }
}