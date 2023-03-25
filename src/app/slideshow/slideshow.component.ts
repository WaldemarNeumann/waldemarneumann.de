import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['maschinenbau.jpg', 'rechner.jpg', 'software.jpg'];
  headlines = [
      'Maschinenbau',
      'Weiterbildung',
      'Softwareentwickler'
    ];
  currentimage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentimage++;
      this.currentimage = this.currentimage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);

  }
}
