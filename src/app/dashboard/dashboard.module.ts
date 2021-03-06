import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

/** import Alibaba antd Designer Module **/
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

/** import Component Views **/
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './view/product/product.component';

/** import App Routing Module **/
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule, 
      ReactiveFormsModule,
      NgZorroAntdModule,
      DashboardRoutingModule
    ],
    providers: [],
    declarations: [
      DashboardComponent,
      ProductComponent
    ],             
    bootstrap: []
  })
export class DashboardModule {}