import { LinksService } from '../../services/links.service';
import { Link } from './../../models/link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss']
})
export class LinksPageComponent implements OnInit {

  links : Link[];

  constructor(private linksService : LinksService) { }

  ngOnInit() {
    this.linksService.getLinks().subscribe( links => {
      this.links = links;
      console.log(links);
    } );
  }

}
