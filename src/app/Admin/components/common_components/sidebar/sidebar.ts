import { Component, Input, OnInit } from '@angular/core';
import { SIDEBAR_MENU, SidebarItem, UserRole } from '../../../../config/sidebarMenuConfig/sidebarMenuConfig';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit{
  @Input() role: UserRole = 'admin';
menu = SIDEBAR_MENU;

constructor(private router: Router) {}

ngOnInit(): void {
  console.log('menumenu',this.menu);
  
}
isChildActive(item: SidebarItem): boolean {
  if (!item.children) return false;
  return item.children.some(child =>
    this.router.url.startsWith(child.route)
  );
}

isAllowed(item: SidebarItem): boolean {
  // example: admin only
  return !item.roles || item.roles.includes('admin');
}
}
