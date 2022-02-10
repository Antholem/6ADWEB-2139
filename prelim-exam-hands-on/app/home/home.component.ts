import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//Cover Photo
  cover:string = "assets/images/cover.jpg"; //Property Binding
  year = 2021; //Numeric Binding

//Four Cards
  learnMore:string = "blue"; //Style Binding seoul
  franceCover:string = "assets/images/france.png"; //Property Binding
  seoulCover:string = "assets/images/seoul.png";
  sfCover:string = "assets/images/sf.png";
  bostonCover:string = "assets/images/boston.png";
  
  france = "France"; //String Binding
  seoul = "Seoul";
  sf = "San Francisco";
  boston = "Boston"


  constructor() { }

  ngOnInit(): void {
  }

}
