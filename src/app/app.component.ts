import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./components/background/background.component";
import { HeaderComponent } from "./components/header/header.component";
import { GetInTouchMarqeeComponent } from "./components/get-in-touch-marqee/get-in-touch-marqee.component";
import { NgxMarqueeModule } from 'ngx-marquee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent, HeaderComponent, GetInTouchMarqeeComponent, NgxMarqueeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real_estate';
}
