import { LinksService } from '../../services/links.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Link } from "../../models/link.model";

@Component({
  selector: 'app-add-link-form',
  templateUrl: './add-link-form.component.html',
  styleUrls: ['./add-link-form.component.scss']
})
export class AddLinkFormComponent implements OnInit {

  addLinkForm : FormGroup;
  
  constructor(private linksService : LinksService) { }

  ngOnInit() {
    this.addLinkForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      imageUrl: new FormControl('',  Validators.required)
    });
  }

  addLink(){

    let title = this.addLinkForm.controls.title.value;
    let subtitle = this.addLinkForm.controls.subtitle.value;
    let url = this.addLinkForm.controls.url.value;
    let imageUrl = this.addLinkForm.controls.imageUrl.value;

    let link : Link = {
      title:title,
      subtitle: subtitle,
      url: url,
      imageUrl: imageUrl,
      count: 0
    } 
    
    this.linksService.addLink(link);
  }

}
