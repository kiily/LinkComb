import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexagon-grid',
  templateUrl: './hexagon-grid.component.html',
  styleUrls: ['./hexagon-grid.component.css']
})
export class HexagonGridComponent implements OnInit {

  links = ["https://www.google.com"];
  constructor() { }

  ngOnInit() {
  }

}
