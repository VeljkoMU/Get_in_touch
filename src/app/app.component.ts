import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./components/background/background.component";
import { HeaderComponent } from "./components/header/header.component";
import { GetInTouchMarqeeComponent } from "./components/get-in-touch-marqee/get-in-touch-marqee.component";
import { NgxMarqueeModule } from 'ngx-marquee';
import { PresentationItemComponent } from './components/presentation-item/presentation-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StatisticItem } from './model/statistic-item';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent, HeaderComponent, GetInTouchMarqeeComponent, NgxMarqueeModule, PresentationItemComponent, CommonModule, PortfolioComponent, TestimonialsComponent,  NgxPageScrollCoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real_estate';
  statitic = [{
    number: "127+",
    text: "Lorem inpsum"
  },
  {
    number: "128+",
    text: "Lorem inpsum"
  }];

  flexReverseStyle = {
    flexDirectin: "row-reverse"
  };
}

