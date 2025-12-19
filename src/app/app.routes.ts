// app.routes.ts

import { Routes } from '@angular/router';

import { WebMainLayOut } from './web/webMainLayOut/web-main-lay-out/web-main-lay-out';
import { Dashboard } from './web/components/dashboard/dashboard/dashboard';

import { MainLayout } from './Admin/AdminMainLayout/AdminMainLayout/admin-main-layout/admin-main-layout';
import { AdminDashboard } from './Admin/components/admin_dashboard/admin-dashboard/admin-dashboard';

import { BuyerList } from './Admin/components/buyer/buyer-list/buyer-list';
import { BuyerAddEdit } from './Admin/components/buyer/buyer_add_edit/buyer-add-edit/buyer-add-edit';
import { BuyerDetails } from './Admin/components/buyer/buyer-details/buyer-details';

import { SellerList } from './Admin/components/seller/seller-list/seller-list';
import { SellerAddEdit } from './Admin/components/seller/seller_add_edit/seller-add-edit/seller-add-edit';
import { SellerDetails } from './Admin/components/seller/seller-details/seller-details/seller-details';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./Admin/components/auth_components/auth/auth')
        .then(m => m.Auth),
  },

  {
    path: 'forgot',
    loadComponent: () =>
      import('./Admin/components/auth_components/forgot/forgot')
        .then(forg => forg.Forgot),
  },

  {
    path: 'admin',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: AdminDashboard },

      // Buyer routes
      { path: 'buyer-list', component: BuyerList },
      { path: 'buyer/:action', component: BuyerAddEdit },
      // Better to have :id param here so you can navigate with an ID:
      { path: 'buyer/:id/details', component: BuyerDetails },

      // Seller routes
      { path: 'seller-list', component: SellerList },
      { path: 'seller/:action', component: SellerAddEdit },
      { path: 'seller/:id/details', component: SellerDetails },
    ],
  },

  {
    path: 'home',
    component: WebMainLayOut,
    children: [
      { path: 'dashboard', component: Dashboard },
    ],
  },
];
