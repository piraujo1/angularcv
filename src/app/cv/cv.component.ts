import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  mypict: string;

  constructor() {
    this.mypict='assets/pictures/meDessin.jpg';
  }

  ngOnInit() {
  }

}
