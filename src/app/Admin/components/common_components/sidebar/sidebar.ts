import { Component, Input } from '@angular/core';
import { SIDEBAR_MENU, SidebarItem, UserRole } from '../../../../config/sidebarMenuConfig/sidebarMenuConfig';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() role: UserRole = 'admin';

  menu: SidebarItem[] = SIDEBAR_MENU;

  isAllowed(item: SidebarItem): boolean {
    // If no roles defined -> visible to all
    return !item.roles || item.roles.includes(this.role);
  }
}
