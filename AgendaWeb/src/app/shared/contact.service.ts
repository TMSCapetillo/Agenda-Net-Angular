import { Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  frmContact: Contact;
  readonly rootUrl = 'http://localhost:11154/api/'
  list: Contact[];

  constructor(private http:HttpClient) { }

  postContact(frmContact:Contact){
    return this.http.post(this.rootUrl + 'Contacts', frmContact)
  }

  putContact(frmContact:Contact){
    return this.http.put(this.rootUrl + 'Contacts/' + frmContact.ContactId, frmContact)
  }

  deleteContact(id) {
    return this.http.delete(this.rootUrl + 'Contacts/'+ id);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'Contacts')
    .toPromise()
    .then(res => this.list = res as Contact[]);
  }
}
