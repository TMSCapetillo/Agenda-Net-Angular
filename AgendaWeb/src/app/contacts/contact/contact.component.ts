//import { ContactService } from 'src/app/shared/contact.service';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from "./../../shared/contact.service";
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor(public service: ContactService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.service.frmContact = {
      ContactId: 0,
      FirstName: '',
      LastName: '',
      Telephone: ''
    }
  }

  onCancel(form: NgForm){
    debugger;
    this.resetForm(form);
    this.service.refreshList();
  }

  onSubmit(form: NgForm) {
    if (this.service.frmContact.ContactId == 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postContact(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Agenda');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putContact(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Agenda');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
