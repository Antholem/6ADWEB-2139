import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  a:string = "assets/images/wear-to-slay.png";
  b:string = "assets/images/hau-library.png";
  c:string = "assets/images/advbase-project.png";
  d:string = "assets/images/hilton-hotel-reworked.png";
  e:string = "assets/images/kickzilla.png";

  constructor() { }

  ngOnInit(): void {
  }

}
