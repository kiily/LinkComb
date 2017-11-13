import { LinksService } from '../../services/links.service';
import { Link } from './../../models/link.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon-grid',
  templateUrl: './hexagon-grid.component.html',
  styleUrls: ['./hexagon-grid.component.scss']
})
export class HexagonGridComponent implements OnInit {

  @Input() links : Link[];
  
  
  constructor(private linksService : LinksService) { 

  }

  ngOnInit() {
    console.log("created")
  }

}
