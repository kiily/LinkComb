import { LinksService } from '../../services/links.service';
import { Link } from './../../models/link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  links : Link[];
  
  constructor(private linksService : LinksService) { }

  ngOnInit() {
    this.linksService.getLinks().subscribe( links => {
      this.links = links;
    } );
  }

}
