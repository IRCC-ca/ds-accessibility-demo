import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { IrccDsAngularComponentsSharedModule } from 'ircc-ds-angular-component-library';
import { InputErrorComponent } from './input-error/input-error.component'


@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    IrccDsAngularComponentsSharedModule,
  ],
  declarations: [
    LoaderComponent,
    InputErrorComponent,
  ],
  exports: [
    LoaderComponent,
    IrccDsAngularComponentsSharedModule,
  ]
})
export class SharedModule { }
