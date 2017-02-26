import { SimpleCrudAppPage } from './app.po';

describe('simple-crud-app App', () => {
  let page: SimpleCrudAppPage;

  beforeEach(() => {
    page = new SimpleCrudAppPage();
  });

  it('should display the added contacts', () => {
    page.navigateTo();
    page.addContact('john', 'stewart');
    page.addContact('mike', 'fallen');
    page.addContact('ziyad', 'al obaidi');

    expect(page.getSelectedContactName()).toEqual("ziyad");
    expect(page.getContactsCount()).not.toBe([]);
  });
});
