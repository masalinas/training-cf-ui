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
                    const params: ConfigurationParameters = {
                        basePath: environment.basePath,
                        username: result.username,
                        accessToken: result.accessToken,
                        withCredentials: false
                    }
            
                    // save in localstorage my configuration
                    localStorage.setItem('params', JSON.stringify(params));

                    // set new configuration
                    let credentials:  {[ key: string ]: string} = {};
                    credentials["Authorization"] = 'Bearer ' + result.accessToken;  

                    params.apiKeys = credentials;
                    params.accessToken = 'Bearer ' + result.accessToken;

                    this.configuration = new Configuration(params);
                    
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

        //return this.authControllerService.authenticateUserUsingPOST({username: username, password: password});
    }        
}