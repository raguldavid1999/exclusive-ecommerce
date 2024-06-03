import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    nav: false,
    autoplay: true,
  };
}
