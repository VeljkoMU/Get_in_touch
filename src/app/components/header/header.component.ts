import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgxPageScrollCoreModule, PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxPageScrollCoreModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {};

    public scrollToFirst() {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '.portfolio',
      });
    };
}
