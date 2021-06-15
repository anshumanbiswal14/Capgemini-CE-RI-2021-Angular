import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() childName:String='';
@Output() age = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
changeAge(inputAge:string)
{
  let newAge:number = parseInt(inputAge);
  console.log("Inside child component"+newAge);
  this.age.emit(newAge);
}
}