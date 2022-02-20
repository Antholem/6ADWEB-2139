import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  me:string = "assets/images/me.png";
  logo1:string = "assets/images/logo1.png";
  logo2:string = "assets/images/logo2.png";
  logo3:string = "assets/images/logo3.png";
  logo4:string = "assets/images/logo4.png";
  logo5:string = "assets/images/logo5.png";
  logo6:string = "assets/images/logo6.png";

  constructor() { }

  ngOnInit(): void {
  }

}
