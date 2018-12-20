import { NgModule } from '@angular/core';

import { AuthService } from './api/auth.service';

/** import angular envirotment variables **/
import { environment } from '../../environments/environment';

/** import Swagger providers **/
import { ApiModule, Configuration, ConfigurationParameters } from '../shared/sdk';

export function apiConfigFactory (): Configuration {
    let credentials:  {[ key: string ]: string} = {};
    credentials["Authorization"] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTI5NzkwMSwiZXhwIjoxNTQ1Mzg0MzAxfQ.gmzp7yQA7UXpYdBz8k9lVI_Uv02sHHdKgxGZqdJDJIGNkyXW7GkfxOmAMdLpZl7KtfXXebyQP63A4ggyyXzesw';    
    
    const params: ConfigurationParameters = {
      basePath: environment.basePath,
      username: 'admin',
      password: 'thingtrack',
      apiKeys: credentials,
      accessToken: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTI5NzkwMSwiZXhwIjoxNTQ1Mzg0MzAxfQ.gmzp7yQA7UXpYdBz8k9lVI_Uv02sHHdKgxGZqdJDJIGNkyXW7GkfxOmAMdLpZl7KtfXXebyQP63A4ggyyXzesw',
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