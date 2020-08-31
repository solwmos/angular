import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title ="BG Collection";
  Description = "This is a personal angular project for storing my board games.";
  constructor() { }
  ngOnInit(): void {}
}
