import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  myImages = [
    {src: "./../../assets/1.jpg"},
    {src: "./../../assets/2.jpg"},
    {src: "./../../assets/3.jpg"},
    {src: "./../../assets/4.jpg"},
    {src: "./../../assets/5.jpg"},
  ]

  myConfig = [
    {
      "slidesToShow": 3,
      "slidesToScroll": 1,
      "autoplay": true,
      "autoplaySpeed": 5000,
      "pauseOnHover": true,
      "infinite": true
    }

  ]
}
