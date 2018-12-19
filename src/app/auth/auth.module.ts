import { NgModule } from '@angular/core';

import { AuthService } from './api/auth.service';

/** import angular envirotment variables **/
import { environment } from '../../environments/environment';

/** import Swagger providers **/
import { ApiModule, Configuration, ConfigurationParameters } from '../shared/sdk';

export function apiConfigFactory (): Configuration {
    let credentials:  {[ key: string ]: string} = {};
    credentials["Authorization"] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTIxMDg0NSwiZXhwIjoxNTQ1Mjk3MjQ1fQ.BZVRC9zE0NxjBbF0nERFpnsHdpNJxjy_63NdmrjpMEkrcdJWQx6vDtR3v-xBABLBjUbyZa0o4wn88289W9ScSw';
  
    //this.authService.getConfiguration();
    
    const params: ConfigurationParameters = {
      basePath: environment.basePath,
      username: 'admin',
      password: 'thingtrack',
      apiKeys: credentials,
      accessToken: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTIxMDg0NSwiZXhwIjoxNTQ1Mjk3MjQ1fQ.BZVRC9zE0NxjBbF0nERFpnsHdpNJxjy_63NdmrjpMEkrcdJWQx6vDtR3v-xBABLBjUbyZa0o4wn88289W9ScSw',
      withCredentials: false
    }
  
    return new Configuration(params);
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