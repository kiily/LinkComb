import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-link-accordion',
  templateUrl: './add-link-accordion.component.html',
  styleUrls: ['./add-link-accordion.component.scss']
})
export class AddLinkAccordionComponent implements OnInit {

  editLinkSelected : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
