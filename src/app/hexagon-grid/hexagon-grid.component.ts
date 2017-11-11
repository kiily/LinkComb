import { LinksService } from '../services/links.service';
import { Link } from './../models/link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexagon-grid',
  templateUrl: './hexagon-grid.component.html',
  styleUrls: ['./hexagon-grid.component.css']
})
export class HexagonGridComponent implements OnInit {

  links : Link[];
  
  
  constructor(private linksService : LinksService) { 

  }

  ngOnInit() {
    this.links = this.linksService.getLinks();
    this.links.push(new Link("Angular 4", "Angular 4 documentation", "https://angular.io/", "https://angular.io/assets/images/logos/angular/angular.svg"),
    new Link("Node.js", "NodeJS API and Docs", "https://nodejs.org/api/", "https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg"),
      new Link("NPM", "Node Package Manager Docs","https://docs.npmjs.com/", "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/188/landscape/npmlogo.png?1499963050"));
  }
//servbice that gets all the links from the other class and get an array for that class too
}
