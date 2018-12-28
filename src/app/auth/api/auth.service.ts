import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

import { AuthControllerService, ConfigurationParameters } from '../../shared/sdk'

import { environment } from '../../../environments/environment';
import { Configuration } from '../../shared/sdk/configuration';

@Injectable()
export class AuthService {
    constructor(private authControllerService: AuthControllerService, private configuration: Configuration) { }

    public login(username: string, password: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this.authControllerService.authenticateUserUsingPOST({username: username, password: password})
                .subscribe(result => {   
                    // STEP01: save in localstorage the credentials
                    const params: ConfigurationParameters = {
                        basePath: environment.basePath,
                        username: result.username,
                        accessToken: result.accessToken,
                        withCredentials: false
                    }
                                
                    localStorage.setItem('params', JSON.stringify(params));

                    // STEP02: modify the configuration service
                    let credentials:  {[ key: string ]: string} = {};
                    credentials["Authorization"] = 'Bearer ' + result.accessToken;  

                    this.configuration.basePath = environment.basePath;
                    this.configuration.username = result.username;
                    this.configuration.password = result.password;
                    this.configuration.accessToken = 'Bearer ' + result.accessToken;
                    this.configuration.apiKeys = credentials;
                    this.configuration.withCredentials = false;
                    
                    // send result event
                    observer.next(result);

                    // send complete event
                    observer.complete();
                }, 
                err => {    
                  console.log('HTTP Error: ' + err);
                }
            );
        });
    }        
}