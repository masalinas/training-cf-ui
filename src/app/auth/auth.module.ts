import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** import Alibaba antd Designer Module **/
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

/** import Swagger providers **/
import { ApiModule, Configuration, ConfigurationParameters } from '../shared/sdk';

/** import Component Views **/
import { LoginComponent } from './view/login/login.component';
import { SignupComponent } from './view/signup/signup.component';

/** import Services **/
import { AuthService } from './api/auth.service';

export function apiConfigFactory (): Configuration {
    // recover params credentials if exist
    let params = localStorage.getItem('params');

    if (params == null)
        return;

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
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule,
        NgZorroAntdModule,
        ApiModule.forRoot(apiConfigFactory)
    ],
    providers: [ AuthService ],
    declarations: [
        LoginComponent,
        SignupComponent
    ],             
    bootstrap: []
  })
export class AuthModule {
    constructor(private authService: AuthService) {        
    }
}