import { Component, Input, OnInit } from '@angular/core';
import { ImageItemInterface } from 'src/app/core/interfaces/image-item.interface';

@Component({
  selector: 'app-carousel-banners',
  templateUrl: './carousel-banners.component.html',
  styleUrls: ['./carousel-banners.component.scss'],
})
export class CarouselBannersComponent implements OnInit {
  @Input() images: ImageItemInterface[] | undefined;
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onNextClick(): void {
    if (this.images !== undefined) {
      if (this.selectedIndex === this.images?.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
}
