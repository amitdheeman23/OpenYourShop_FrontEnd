import { AfterViewInit, Component } from '@angular/core';
import { Header } from '../../../components/common_components/header/header';
import { Footer } from '../../../components/common_components/footer/footer';
import { Sidebar } from '../../../components/common_components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,Header,Sidebar,Footer],
  templateUrl: './admin-main-layout.html',
  styleUrl: './admin-main-layout.scss',
})
export class MainLayout implements AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {
      (window as any)?.AdminLTE?.init?.();
    });
  }
}
