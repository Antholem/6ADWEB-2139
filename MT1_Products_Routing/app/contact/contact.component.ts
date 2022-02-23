import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:string = "assets/images/contact.png";
  address:string = "assets/images/address.png";
  email:string = "assets/images/email.png";
  mobile:string = "assets/images/mobile.png";

  constructor() { }

  ngOnInit(): void {
  }

}
