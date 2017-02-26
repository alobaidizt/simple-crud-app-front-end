import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  providers: [ ContactService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title  = 'Simple CRUD App';
  contact = new Contact();
  selectedContact: Contact;
  contacts: Contact[];
  errorMessage: string;

  constructor (private contactService: ContactService) {}

  ngOnInit() { this.getContacts(); }

  getContacts() {
    this.contactService.getContacts()
      .then(
        contacts => this.contacts = contacts,
        error =>  this.errorMessage = <any>error);
  }

  persistContact (contact: Contact) {
    console.log(contact);
    if ((contact.firstName === '') || (contact.lastName === '')) return;

    this.contactService.addContact(contact)
      .then(
        contact  => this.contacts.push(contact),
        error =>  this.errorMessage = <any>error);
  }

  addContact(contact: Contact): void {
    let newContact:Contact = Object.assign({},contact);
    this.selectedContact = newContact;
    this.persistContact(newContact);
    this.contact.clear()
  }

  clearAll(): void {
    this.contactService.deleteContacts()
      .then(
        contacts => this.contacts = contacts,
        error    => this.errorMessage = <any>error);
  }

  contactSelected(contact: Contact): void {
    this.selectedContact = contact;
  }
}
