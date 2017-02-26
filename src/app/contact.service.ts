import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';
import { Contact } from './contact';
@Injectable()
export class ContactService {
  private contactsUrl = 'http://localhost:3000/contacts';  // URL to web API
  constructor (private http: Http) {}

  getContacts (): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  deleteContacts (): Promise<Contact[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.contactsUrl, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  addContact (contact: Contact): Promise<Contact> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.contactsUrl, contact, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.contacts);
    return body.contacts || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
