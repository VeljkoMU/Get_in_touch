import { Injectable } from '@angular/core';
import { Testimonial } from '../model/testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
    public testimonials: Array<Testimonial> = [
      {
        text: "“Lorem ipsum dolor sit amet consectetur. Nunc gravida viverra maecenas leo. Pretium adipiscing felis fames turpis scelerisque quam non in odio. Amet id suspendisse sed vel interdum rat elementum amet. Ipsum parturient lectus ultricies proin. Nulla duis”.",
        name: "MICHEL COURSE",
        status: "Our Client 1"
      },
      {
        text: "“Lorem ipsum dolor sit amet consectetur. Nunc gravida viverra maecenas leo. Pretium adipiscing felis fames turpis scelerisque quam non in odio. Amet id suspendisse sed vel interdum rat elementum amet..",
        name: "MICHEL COURSE",
        status: "Our Client 2"
      },
      {
        text: "“Lorem ipsum dolor sit amet consectetur.",
        name: "MICHEL COURSE",
        status: "Our Client 3"
      }
    ]

  constructor() { }
}
