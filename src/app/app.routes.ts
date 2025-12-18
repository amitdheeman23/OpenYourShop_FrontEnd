import { Routes } from '@angular/router';
import { main } from '@popperjs/core';
import { WebMainLayOut } from './web/webMainLayOut/web-main-lay-out/web-main-lay-out';
import { Dashboard } from './web/components/dashboard/dashboard/dashboard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
{
  path: 'login',
  loadComponent: () =>
    import('./Admin/components/auth_components/auth/auth')
      .then(m => m.Auth)
},
{path:'forgot',loadComponent:()=>import('./Admin/components/auth_components/forgot/forgot').then(forg=>forg.Forgot)},
{path:'home',loadComponent:()=>import('./Admin/AdminMainLayout/AdminMainLayout/admin-main-layout/admin-main-layout').then(mainL=>mainL.MainLayout)},

{path:'web',component:WebMainLayOut,children:[
  {path:'dashboard',component:Dashboard}
]}

];
