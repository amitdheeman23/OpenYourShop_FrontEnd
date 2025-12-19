// config/sidebarMenuConfig/sidebarMenuConfig.ts

export type UserRole = 'admin' | 'seller' | 'buyer';

export interface SidebarChild {
  label: string;
  route: string;
}

export interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  children?: SidebarChild[];
  roles?: UserRole[];
}

export const SIDEBAR_MENU: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    route: '/admin/dashboard',
    roles: ['admin'],
  },
  {
    label: 'Seller Management',
    icon: 'fas fa-store',
    roles: ['admin'],
    children: [
      { label: 'Seller List', route: '/admin/seller-list' },
      { label: 'Add Seller', route: '/admin/seller/add' },
    ],
  },
  {
    label: 'Buyer Management',
    icon: 'fas fa-shopping-cart',
    roles: ['admin'],
    children: [
      { label: 'Buyer List', route: '/admin/buyer-list' },
    ],
  },
];
