import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../web_common_components/header/header/header';
import { Footer } from '../../web_common_components/footer/footer/footer';

@Component({
  selector: 'app-web-main-lay-out',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './web-main-lay-out.html',
  styleUrl: './web-main-lay-out.scss',
})
export class WebMainLayOut {

}
