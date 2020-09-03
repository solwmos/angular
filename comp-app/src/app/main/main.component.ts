import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  typingSomething="nothing is typed yet!";
  divText="";
  constructor() { }

  ngOnInit(): void { }
  onTyping(event)
  {
    this.typingSomething = (<HTMLInputElement>event.target).value;
  }

}
