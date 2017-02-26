export class Contact {
  firstName: string;
  lastName:  string;
  company:   string;
  address:   string;

  constructor(first: string = null, last: string = null,
              company: string = null, address: string = null) {
        this.firstName = (first == null) ? '' : first;
        this.lastName  = (last == null) ? '' : last;
        this.company   = (company == null) ? '' : company;
        this.address   = (address == null) ? '' : address;
  }

  clear() {
    this.firstName = "";
    this.lastName  = "";
    this.company   = "";
    this.address   = "";
  }
}
