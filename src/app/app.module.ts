/** import App Angular Modules from libraries**/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** import main App Component **/
import { AppComponent } from './app.component';

/** import App Routing Module **/
import { AppRoutingModule } from './app-routing.module';

/** import Swagger providers **/
import { BASE_PATH } from './shared/sdk';

/** import Modules **/
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

/** import Alibaba antd Designer Module **/
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

/** import angular i18n locale Module and register **/
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);

/** import angular envirotment variables **/
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,    
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.basePath },
    { provide: NZ_I18N, useValue: es_ES }
  ],
  declarations: [
    AppComponent
  ],             
  bootstrap: [ AppComponent ]
})
export class AppModule {}
