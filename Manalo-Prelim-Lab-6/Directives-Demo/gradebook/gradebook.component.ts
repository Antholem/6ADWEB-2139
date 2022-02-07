import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //ngIf Statement
  isLogIn:boolean=false;
  isLogOut:boolean=true;

  //ngFor Statement
  list = [1,2,3,4,5];

  //ngFor Statement using TrackBy
  studentArr : any[] = [
    {"id": 1, "name": "student1"},
    {"id": 2, "name": "student2"},
    {"id": 3, "name": "student3"},
    {"id": 4, "name": "student4"}
  ];
    trackByData (index:number, studArr:any): number
    {
      return studArr.id;
    }    

    //ngFor Statement (Angular - Display a list items)
    staff = [
      { firstname: "Harry", lastname: "Styles", email: "harry.styles@test.com", role: "user"},
      { firstname: "Zayn", lastname: "Malik", email: "zayn.malik@test.com", role: "admin"},
      { firstname: "Liam", lastname: "Payne", email: "liam.payne@test.com", role: "admin"},
      { firstname: "Louis", lastname: "Tomlinson", email: "louis.tomlinson@test.com", role: "user"},
      { firstname: "Niall", lastname: "Horan", email: "niall.horan@test.com", role: "user"}
    ];

    //Switch Statement
    logInName = "admin";
    
  constructor() { }

  ngOnInit(): void {
  }

}
