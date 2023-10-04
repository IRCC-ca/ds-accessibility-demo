import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundInfoComponent } from './background-info/background-info.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { HomeComponent } from './home/home.component';
import { WorkInformationComponent } from './work-information/work-information.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'ROUTES.Home' },
  { path: 'background-information', component: BackgroundInfoComponent, title: 'ROUTES.BackgroundInfo' }, //English
  { path: 'informations-préliminaires', component: BackgroundInfoComponent, title: 'ROUTES.BackgroundInfo' }, //French
  { path: 'personal-information', component: PersonalInformationComponent, title: 'ROUTES.PersonalInfo' }, //English
  { path: 'informations-personnelles', component: PersonalInformationComponent, title: 'ROUTES.PersonalInfo' }, //French
  { path: 'work-information', component: WorkInformationComponent, title: 'ROUTES.WorkInfo' }, //English
  { path: 'information-de-travail', component: WorkInformationComponent, title: 'ROUTES.WorkInfo' }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccessibilityDemoRoutingModule { }
