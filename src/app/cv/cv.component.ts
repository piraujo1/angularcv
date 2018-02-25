import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  mypict: string;
  arhspict: string;
  unifrpict: string;
  unamurpict: string;

  constructor() {
    this.mypict='assets/pictures/meDessin.jpg';
    this.arhspict='assets/pictures/arhs-cube.png';
    this.unifrpict='assets/pictures/unifr.png';
    this.unamurpict='assets/pictures/unamur.png';
  }

  ngOnInit() {
  }

  golinkedin() {
    window.open('https://www.linkedin.com/in/jonathan-pirau-918631114/',"_blank");
  }

}
