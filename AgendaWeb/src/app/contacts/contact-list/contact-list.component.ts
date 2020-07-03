import { ContactService } from "./../../shared/contact.service";
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/contact.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [
  ]
})
export class ContactListComponent implements OnInit {

  constructor(public service: ContactService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: Contact) {
    this.service.frmContact = Object.assign({}, pd);
  }

  onDelete(contactId) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteContact(contactId)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Agenda');
        },
          err => {
            console.log(err);
          })
    }
  }
}
