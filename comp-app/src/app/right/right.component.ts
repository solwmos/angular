import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  clickedStatus = false;
  clickedMessage="";
  constructor() 
  {

   }

  ngOnInit(): void {
  }
onClicked()
{
  this.clickedStatus = true;
  
}
}
