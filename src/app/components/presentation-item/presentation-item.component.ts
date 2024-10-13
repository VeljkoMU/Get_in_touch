import { Component, input, output } from '@angular/core';
import {StatisticItem} from '../../model/statistic-item';

@Component({
  selector: 'app-presentation-item',
  standalone: true,
  imports: [],
  templateUrl: './presentation-item.component.html',
  styleUrl: './presentation-item.component.css'
})
export class PresentationItemComponent {
     accentTitle = input<String | undefined>();
     title = input<String | undefined>();
     text = input<String | undefined>();
     flexStyle = input<String>();
     imgSrc = input<String>();
     statisticItem = input<Array<StatisticItem>>();
}
