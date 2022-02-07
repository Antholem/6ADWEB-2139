import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  logo:string = "assets/images/soc.png";
  cover:string = "assets/images/cover.png";

  //CloudComp
  studName1 = "";
  studNum1 = 0;
  prelim1 = 0;
  midterm1 = 0;
  final1 = 0;

  //AppDev
  studName2 = "";
  studNum2 = 0;
  prelim2 = 0;
  midterm2 = 0;
  final2 = 0;

  //AdWeb
  studName3 = "";
  studNum3 = 0;
  prelim3 = 0;
  midterm3 = 0;
  final3 = 0;

  //WebDevFol
  studName4 = "";
  studNum4 = 0;
  prelim4 = 0;
  midterm4 = 0;
  final4 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
