import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email:string = "assets/images/email.png";
  number:string = "assets/images/number.png";
  fb:string = "assets/images/fb.png";
  tw:string = "assets/images/tw.png";
  ig:string = "assets/images/ig.png";

  constructor() { }

  ngOnInit(): void {
  }

}
