import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'en',
      children: [
        { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        //This will direct to home, which will be redirected by the guard to the login page if required
        { path: '**', redirectTo: 'home' },
      ]
    },
    {
      path: 'fr',
      children: [
        { path: 'connexion', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        //This will direct to home, which will be redirected by the guard to the login page if required
        { path: '**', redirectTo: 'acceuil' }
      ]
    },
    //Has to be last as this is the fallback route
    { path: '**', redirectTo: 'en/' }
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
