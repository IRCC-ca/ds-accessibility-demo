import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessibilityDemoComponent } from './accessibility-demo.component';
import { BackgroundInfoComponent } from './background-info/background-info.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'background-information', component: BackgroundInfoComponent }, //English
  { path: 'informations-préliminaires', component: BackgroundInfoComponent }, //French
  { path: 'personal-information', component: PersonalInformationComponent }, //English
  { path: 'informations-personnelles', component: PersonalInformationComponent }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccessibilityDemoRoutingModule { }
