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
import { APIS, BASE_PATH } from './shared/sdk';

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
              { provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }