import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

// const routes: Routes = [
//   {
//     path: 'en',
//     children: [
//       { path: '', component: HomeComponent }
//     ]
//   },
//   {
//     path: 'fr',
//     children: [
//       Shell.childRoutes([
//         { path: '', component: HomeComponent, data: { title: marker('Home') } }
//       ])
//     ]
//   },
//   // { path: '**', redirectTo: 'en/sign-in', pathMatch: 'full' },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
