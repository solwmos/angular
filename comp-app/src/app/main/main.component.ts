import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  typingSomething="nothing is typed yet!";
  divText="";
  serverStatus= false;

  constructor() { 
    this.serverStatus= Math.random() > 0.5 ? true:false;

  }

  ngOnInit(): void { }
  onTyping(event)
  {
    this.typingSomething = (<HTMLInputElement>event.target).value;
  }
getColor()
{
  return this.serverStatus === Math.random() > 0.5 ? 'green':'red';
}
}
