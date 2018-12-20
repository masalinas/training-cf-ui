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

    /*let credentials:  {[ key: string ]: string} = {};
    credentials["Authorization"] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTI5NzkwMSwiZXhwIjoxNTQ1Mzg0MzAxfQ.gmzp7yQA7UXpYdBz8k9lVI_Uv02sHHdKgxGZqdJDJIGNkyXW7GkfxOmAMdLpZl7KtfXXebyQP63A4ggyyXzesw';    
    
    const configurationParameters: ConfigurationParameters = {
      basePath: environment.basePath,
      username: 'admin',
      password: 'thingtrack',
      apiKeys: credentials,
      accessToken: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTI5NzkwMSwiZXhwIjoxNTQ1Mzg0MzAxfQ.gmzp7yQA7UXpYdBz8k9lVI_Uv02sHHdKgxGZqdJDJIGNkyXW7GkfxOmAMdLpZl7KtfXXebyQP63A4ggyyXzesw',
      withCredentials: false
    }
  
    return new Configuration(configurationParameters);*/
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