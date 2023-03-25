import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['maschinenbau.jpg', 'rechner.jpg', 'software.jpg'];
  currentimage = 0;
  showImage = false;

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
