import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Array<String> = [];
  constructor() { }

  ngOnInit() {
    this.images.push("/assets/images/image1.jpg");
    this.images.push("/assets/images/image2.jpg");
    this.images.push("/assets/images/image3.jpg");
    this.images.push("/assets/images/image4.jpg");

  }

}
