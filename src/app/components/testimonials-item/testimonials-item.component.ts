import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonials-item',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-item.component.html',
  styleUrl: './testimonials-item.component.css'
})
export class TestimonialsItemComponent {
    text = input<String>();
    name = input<String>();
    status = input<String>();
}
