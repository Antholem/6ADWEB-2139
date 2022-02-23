import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //Jacket
  product1:string = "assets/images/product1.png";
  product2:string = "assets/images/product2.png";
  product3:string = "assets/images/product3.png";

  //Pants
  product4:string = "assets/images/product4.png";
  product5:string = "assets/images/product5.png";
  product6:string = "assets/images/product6.png";

  //Tshirt
  product7:string = "assets/images/product7.png";
  product8:string = "assets/images/product8.png";
  product9:string = "assets/images/product9.png";

  //Shoes
  product10:string = "assets/images/product10.png";
  product11:string = "assets/images/product11.png";
  product12:string = "assets/images/product12.png";

  //Handbags
  product13:string = "assets/images/product13.png";
  product14:string = "assets/images/product14.png";
  product15:string = "assets/images/product15.png";

  //Jogging Pants
  product16:string = "assets/images/product16.png";
  product17:string = "assets/images/product17.png";
  product18:string = "assets/images/product18.png";

  //Faceshields
  product19:string = "assets/images/product19.png";
  product20:string = "assets/images/product20.png";
  product21:string = "assets/images/product21.png";

  //Mugs
  product22:string = "assets/images/product22.png";
  product23:string = "assets/images/product23.png";
  product24:string = "assets/images/product24.png";

  constructor() { }

  ngOnInit(): void {
  }

}
