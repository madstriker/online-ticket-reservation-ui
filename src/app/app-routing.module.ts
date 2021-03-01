import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard'

const routes: Routes = [
  {
    path:"" ,
    loadChildren: () => import('./public/public.module').then(module => module.PublicModule),
  },
  {
    path:"home" ,
    loadChildren: () => import('./secure/secure.module').then(module => module.SecureModule),
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
