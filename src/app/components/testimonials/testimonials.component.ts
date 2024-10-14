import { Component, input } from '@angular/core';
import { PresentationItemComponent } from "../presentation-item/presentation-item.component";
import { TestimonialsItemComponent } from '../testimonials-item/testimonials-item.component';
import { Testimonial } from '../../model/testimonial';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [PresentationItemComponent, TestimonialsItemComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
    constructor(public testimonialsService: TestimonialsService) {
      this.getTestimionials()
    }

    testimonials: Testimonial[] = [];
    currentTestimonial: Testimonial | undefined = undefined;
    currentIndex = 0;

    public getTestimionials() {
      this.testimonials = this.testimonialsService.testimonials;
      this.currentTestimonial = this.testimonials[0]
    }

    public setMove(left = false) {
      if(this.currentIndex + (!left ? 1 : -1) == this.testimonials.length) {
        this.currentIndex = -1;
      }
      else if(this.currentIndex + (!left ? 1 : -1) == -1) {
        this.currentIndex = this.testimonials.length;
      }

      this.currentTestimonial = this.testimonials[this.currentIndex + (!left ? 1 : -1)];
      this.currentIndex = this.currentIndex + (!left ? 1 : -1);
      }
}
 