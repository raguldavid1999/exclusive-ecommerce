import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryHeadComponent } from '../category-head/category-head.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CarouselModule, CategoryHeadComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    console.log(new Date(2025, 0, 1).valueOf());

    let timing = setInterval(() => {
      if (this.count <= 0) {
        clearInterval(timing);
      } else {
        this.currentSecond = this.secondsToDday();
      }
    }, 1000);
  }
  count: any = 10;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  secondsInAMinute = 60;
  currentSecond = 0;
  lastDate: any = new Date(2025, 0, 1).valueOf();
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
  secondsToDday() {
    let timeDiff = this.lastDate - Date.now();
    return (
      Math.floor(timeDiff / this.milliSecondsInASecond) % this.secondsInAMinute
    );
  }
}
