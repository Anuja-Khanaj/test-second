import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true } }
  ]
})
export class CarouselComponent implements OnInit {
  @ViewChild('img')img:ElementRef 

  activeSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.startAutoChange();
  }
  ngAfterViewInit():void{
    
  }

  changeSlide(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
    } else {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    }
  }

  private startAutoChange(): void {
    setInterval(() => {
      this.changeSlide('next');
    }, 2000);
  }

  slides = [
    { image: './../../../assets/bg2.jpeg', alt: 'Slide 1' },
    { image: './../../../assets/bg3.webp', alt: 'Slide 2' },
    { image: './../../../assets/bg2.jpeg', alt: 'Slide 3' }
  ];
}
