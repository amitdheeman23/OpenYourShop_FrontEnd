import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
{
  path: 'login',
  loadComponent: () =>
    import('./components/auth_components/auth/auth')
      .then(m => m.Auth)
},
{path:'forgot',loadComponent:()=>import('./components/auth_components/forgot/forgot').then(forg=>forg.Forgot)}

];
