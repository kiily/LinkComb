import { Link } from './../models/link.model';
import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  links : Link[] =[]; 

  constructor() { }

  getLinks(){
    return this.links;
  }

  addLink(link : Link){
    this.links.push(link);
    return this.links;
  }

  deleteLink(){

  }

  editLink(){

  }

}
