import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  list= [1,2,3,4,5]

  Products = [
    {
      id: "#SHL0007",
      image: "assets/images/product1.png",
      name: "Windbreaker (Jacket)",
      description: "Lightweight, wind-resistant outer layers that may be worn over additional layers to keep you warm while you're outside having fun."
    },
    {
      id: "#SHL0017",
      image: "assets/images/product2.png",
      name: "Cardigan (Jacket)",
      description: "Frequently worn over shirts and inside suit jackets as a less formal alternative to the waistcoat or vest that holds the necktie in place once the jacket is removed."
    },
    {
      id: "#SHL0027",
      image: "assets/images/product3.png",
      name: "Parka (Jacket)",
      description: "It's commonly composed of water-resistant synthetic material and stuffed with batting or goose or duck down for added warmth."
    },

    {
      id: "#SHL0008",
      image: "assets/images/product4.png",
      name: "Slim Jeans (Pants)",
      description: "Tight trousers with a snug fit through the legs and a tiny leg opening that varies in circumference from 9' to 20' depending on size."
    },
    {
      id: "#SHL0018",
      image: "assets/images/product5.png",
      name: "Lululemon (Pants)",
      description: "They're really comfy to wear and may be used in a number of scenarios. They can even be worn to work because they're made like conventional pants (if your workplace is fairly casual)."
    },
    {
      id: "#SHL0028",
      image: "assets/images/product6.png",
      name: "Trouser (Pants)",
      description: "Combine the classic design of traditional pants with the comfort of denim. The waistband and legs of these fashionable, stylish jeans are normally broader, but the hips and back are fitted."
    },


    {
      id: "#SHL0001",
      image: "assets/images/product7.png",
      name: "V-neck Short Sleeve (T-Shirt)",
      description: "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites."
    },
    {
      id: "#SHL0011",
      image: "assets/images/product8.png",
      name: "Solid Crew Neck (T-Shirt)",
      description: "White color t-shirt will immediately become one of your favorites, as it is comfortable, casual, and loose fitting."
    },
    {
      id: "#SHL0021",
      image: "assets/images/product9.png",
      name: "Carhartt (T-Shirt)",
      description: "Our heavyweight grey color t-shirt will immediately become one of your favorites since it is comfortable, casual, and loose fitting."
    },


    {
      id: "#SHL0002",
      image: "assets/images/product10.png",
      name: "Brown Leather (Shoes)",
      description: "Unstructured fabriNot only a naturally robust material, but it is also quite comfortable. Your feet will appreciate the comfort and support that leather shoes provide. To avoid back injuries, it's critical to find the correct shoes.c shoulder bag that can either be worn parallel to your body, or across it."
    },
    {
      id: "#SHL0012",
      image: "assets/images/product11.png",
      name: "Running Shoes (Shoes)",
      description: "Require cushioning in the forefoot and heel to absorb around four times your body weight every stride."
    },
    {
      id: "#SHL0022",
      image: "assets/images/product12.png",
      name: "Vans (Shoes)",
      description: "Comfortable footwear that may be worn on a regular basis. Vacations and travels are made for casual shoes. These sorts of shoes come in a wide range of shapes and colors, in addition to giving comfort."
    },


    {
      id: "#SHL0003",
      image: "assets/images/product13.png",
      name: "Puzzle Mini (Handbag)",
      description: "The form is cuboid, and the cutting process is exact. Calfskin is used to make this little version. Carry it on your shoulder, crossbody, top handle, or clutch."
    },
    {
      id: "#SHL0013",
      image: "assets/images/product14.png",
      name: "Dionysus Small (Handbag)",
      description: "The Dionysus blends old and new House components, blending the Creative Director's idea of a vintage bag with modern touches."
    },
    {
      id: "#SHL0023",
      image: "assets/images/product15.png",
      name: "Micro Lugagge (Handbag)",
      description: "This timeless classic has plenty of room inside and is a terrific investment item. It's also incredibly practical, so you'll be able to wear it for years. The Luggage Bag is unquestionably on the list of bags worth investing in."
    },


    {
      id: "#SHL0004",
      image: "assets/images/product16.png",
      name: "Printed Drape (Jogging Pants)",
      description: "Drape cloth in a variety of pleasing colors and patterns. Easy-fitting pants that may be worn both inside and outside the house."
    },
    {
      id: "#SHL0014",
      image: "assets/images/product17.png",
      name: "LA Sweat (Jogging Pants)",
      description: "Sweatpants with a relaxed fit and an elasticated cuff at the ankle. 16 oz. custom knit The fabric is made of French Terry. Two front pockets and one patch pocket on the right back. Elastic waist with drawstring closing."
    },
    {
      id: "#SHL0024",
      image: "assets/images/product18.png",
      name: "Track (Jogging Pants)",
      description: "These are often used for track and field competitions. Because these pants absorb perspiration fast, they are commonly worn during sporting activities or workouts."
    },


    {
      id: "#SHL0005",
      image: "assets/images/product19.png",
      name: "C1 Gray (Face Shield)",
      description: "a color gray protective covering for all or part of the face, usually made of transparent plastic and worn to avoid damage (such as from accident, excessive temperature, or a toxic material) or to decrease the transmission of transmissible illness."
    },
    {
      id: "#SHL0015",
      image: "assets/images/product20.png",
      name: "C2 Tea (Face Shield)",
      description: "a color tea protective covering for all or part of the face, usually made of transparent plastic and worn to avoid damage (such as from accident, excessive temperature, or a toxic material) or to decrease the transmission of transmissible illness."
    },
    {
      id: "#SHL0025",
      image: "assets/images/product21.png",
      name: "C3 Blue (Face Shield)",
      description: "a color blue protective covering for all or part of the face, usually made of transparent plastic and worn to avoid damage (such as from accident, excessive temperature, or a toxic material) or to decrease the transmission of transmissible illness."
    },


    {
      id: "#SHL0006",
      image: "assets/images/product22.png",
      name: "Season of Joy (Mug)",
      description: "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening"
    },
    {
      id: "#SHL0016",
      image: "assets/images/product23.png",
      name: "Lid (Mug)",
      description: "Twist the lid to expose the sip aperture on commuter mugs, which have a rubber-lined cover for a tight, spill-resistant seal."
    },
    {
      id: "#SHL0026",
      image: "assets/images/product24.png",
      name: "Nordic Fall (Mug)",
      description: "Flip the top to reveal the sip opening on commuter mugs, which have a rubber-lined cover for a tight, spill-proof closure."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
