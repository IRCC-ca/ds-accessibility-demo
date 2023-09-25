import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { IrccDsAngularComponentLibraryModule } from 'ircc-ds-angular-component-library';
import { InputErrorComponent } from './input-error/input-error.component'


@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    IrccDsAngularComponentLibraryModule,
  ],
  declarations: [
    LoaderComponent,
    InputErrorComponent,
  ],
  exports: [
    LoaderComponent,
    IrccDsAngularComponentLibraryModule,
  ]
})
export class SharedModule { }
