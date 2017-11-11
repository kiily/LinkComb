import { Link } from '../models/link.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent implements OnInit {

  @Input() link : Link;

  constructor() { }

  ngOnInit() {
    
  }

}
