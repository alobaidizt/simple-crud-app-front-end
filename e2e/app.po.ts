import { browser, element, by, $$ } from 'protractor';

export class SimpleCrudAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getContactsCount() {
    return $$('.contacts tbody tr').count();
  }

  getSelectedContactName() {
    return element(by.css('.preview label.first-name')).getText();
  }

  clickAdd() {
    return element(by.css('button.btn')).click();
  }

  fillInNewContact(first:string, last:string) {
    element(by.css('.inputs-form .first-name input')).sendKeys(first);
    element(by.css('.inputs-form .last-name input')).sendKeys(last);
    element(by.css('.inputs-form .company input')).sendKeys('ibm');
    element(by.css('.inputs-form .address input')).sendKeys('123 somewhere');
  }

  addContact(first:string, last:string) {
    this.fillInNewContact(first, last);
    return this.clickAdd();
  }
}
