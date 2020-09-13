import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  clickedStatus = false;
  clickedMessage="";
  servers = ['Server 1', 'Server 2'];
  constructor() 
  {

   }

  ngOnInit(): void {
  }
onClicked()
{
  this.clickedStatus = true;
  this.servers.push('Server');
}
}
