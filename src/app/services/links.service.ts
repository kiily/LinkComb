import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Link } from './../models/link.model';
import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  linksCollection : AngularFirestoreCollection<Link>;
  links : Observable<Link[]>; 
  
  //get an individual link document for delete and update methods
  constructor(private afs : AngularFirestore) { 
    //fetch the links
    // this.linksCollection = this.afs.collection('links', ref => ref.orderBy('count', 'desc'));
    this.linksCollection = this.afs.collection('links');

    //to retrieve the id for each item, need to use snapshotChanges() and 
    //then map the id to access the entire object
    this.links = this.linksCollection.snapshotChanges()
    .map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Link;
        //set the ide for the data observable and then return it;
        //can now access the id
        data.id = a.payload.doc.id;
        return data;
      });
    })
  }

  getLinks(){
    return this.links;
  }

  addLink(link : Link){
 
  }

  deleteLink(){

  }

  editLink(){

  }

}
