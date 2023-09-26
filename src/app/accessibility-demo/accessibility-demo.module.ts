import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityDemoRoutingModule } from './accessibility-demo-routing.module';
import { SharedModule } from '../@shared';
import { AccessibilityDemoComponent } from './accessibility-demo.component';
import {
  IrccDsAngularComponentsSharedModule,
  IrccDsAngularHeaderFooterModule
} from 'ircc-ds-angular-component-library';
import { TranslateModule } from '@ngx-translate/core';
import { BackgroundInfoComponent } from './background-info/background-info.component';

@NgModule({
  declarations: [
    AccessibilityDemoComponent,
    BackgroundInfoComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AccessibilityDemoRoutingModule,
    SharedModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularComponentsSharedModule
  ]
})
export class AccessibilityDemoModule { }
