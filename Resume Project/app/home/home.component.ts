import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  me:string = "assets/images/me.png";

  constructor() { }

  ngOnInit(): void {
  }

}
