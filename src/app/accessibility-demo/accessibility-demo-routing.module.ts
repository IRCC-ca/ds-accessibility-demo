import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessibilityDemoComponent } from './accessibility-demo.component';
import { BackgroundInfoComponent } from './background-info/background-info.component';

const routes: Routes = [
  { path: '', component: AccessibilityDemoComponent },
  { path: 'background-information', component: BackgroundInfoComponent }, //English
  { path: 'informations-préliminaires', component: BackgroundInfoComponent }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccessibilityDemoRoutingModule { }
