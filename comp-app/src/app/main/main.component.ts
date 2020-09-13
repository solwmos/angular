import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit 
{
  typingSomething="Nothing is typed yet!";
  divText="";
  serverStatus= false;
  servers = ['Server 1','Server 2'];

  constructor() 
  { 
    this.serverStatus= Math.random() > 0.5 ? true:false;
  }

  ngOnInit(): void { }
  onTyping(event)
  {
    this.typingSomething = (<HTMLInputElement>event.target).value;
  }
  addServer()
  {
    this.servers.push(this.typingSomething);
  }
  getColor()
  {
    return this.serverStatus === Math.random() > 0.5 ? 'green':'red';
  }
}
