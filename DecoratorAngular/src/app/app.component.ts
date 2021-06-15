import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String ='Raksha';
doClick(name:string)
  {
    this.name=name;
    console.log("Change name"+this.name)
  }
}