/** import App Angular Modules **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** import Alibaba antd Designer Module **/
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

/** import main App Component **/
import { AppComponent } from './app.component';

/** import Swagger providers **/
import { APIS, BASE_PATH, Configuration } from './shared/sdk';

/** import App Routing Module **/
import { AppRoutingModule } from './app-routing.module';

/** import Product View Component **/
import { ProductComponent } from './product/product.component';

/** import angular i18n locale Module and register **/
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);

/** import angular envirotment variables **/
import { environment } from '../environments/environment';

function getConfiguration() {
  let credentials:  {[ key: string ]: string} = {};
  credentials["Authorization"] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTIxMDg0NSwiZXhwIjoxNTQ1Mjk3MjQ1fQ.BZVRC9zE0NxjBbF0nERFpnsHdpNJxjy_63NdmrjpMEkrcdJWQx6vDtR3v-xBABLBjUbyZa0o4wn88289W9ScSw';

  return new Configuration({
      basePath: 'http://localhost:3000',
      username: 'admin',
      password: 'thingtrack',
      apiKeys: credentials,
      accessToken: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU0NTIxMDg0NSwiZXhwIjoxNTQ1Mjk3MjQ1fQ.BZVRC9zE0NxjBbF0nERFpnsHdpNJxjy_63NdmrjpMEkrcdJWQx6vDtR3v-xBABLBjUbyZa0o4wn88289W9ScSw',
      withCredentials: false
  });
}

@NgModule({
  declarations: [
    AppComponent, 
    ProductComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,    
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [APIS,
              { provide: BASE_PATH, useValue: environment.basePath },
              { provide: NZ_I18N, useValue: es_ES },
              { provide: Configuration, useFactory: getConfiguration, multi: false}
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }