import { Component, Input } from '@angular/core';
import { Contact } from './contact';


@Component({
  selector:    'simple-form',
  templateUrl: './simple-form.component.html'
})

export class SimpleFormComponent {
  @Input()
  contact: Contact;
}
