import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slides = [
    {img: "./../../assets/1.png"},
    {img: "./../../assets/2.png"},
    {img: "./../../assets/3.png"},
    {img: "./../../assets/4.png"},
    {img: "./../../assets/5.png"},
  ]

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true
  }

}
