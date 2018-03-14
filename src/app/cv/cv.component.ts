import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Img} from './img';
import {SkillsService} from './skills.service';

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
  descr:string;
  Imgs = [];
  show=false;
  secondSkill=["Scala", "IONIC Framework", "Electron Framework", "Agile Methodology (Scrum-Kanban)", "Latex", "JSON", "XML", "PHP"];



  constructor( private  skillservice : SkillsService) {
    this.mypict='assets/pictures/meDessin.jpg';
    this.arhspict='assets/pictures/arhs-cube.png';
    this.unifrpict='assets/pictures/unifr.png';
    this.unamurpict='assets/pictures/unamur.png';
    this.skillservice.getJSON().subscribe(data => {
      this.Imgs=data.data
    });
  }

  ngOnInit() {
  }

  navigate(url : string) {
    window.open(url,"_blank");
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }

  mouseEnter(div : string){
    this.show=true;
    this.descr=div;
    //this.Imgs.push("hover");
  }

  mouseLeave(div : string){
    this.show=false;
    //this.Imgs.push("out");
  }
}
