import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { Contact } from './contact';

describe('AppComponent', () => {
  let app:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    imports: [
      FormsModule,
      HttpModule,
      JsonpModule
    ],
    });
    fixture = TestBed.createComponent(AppComponent);
    app     = fixture.debugElement.componentInstance;
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should set selectedContact`, async(() => {
    app.contactSelected(new Contact('derp', 'herp'));

    expect(app.selectedContact.firstName).toEqual('derp');
    expect(app.selectedContact.lastName).toEqual('herp');
  }));

  it('should clear contact fields when adding a new item', async(() => {
    app.contact = new Contact('derp', 'herp');
    app.contacts =  [];
    expect(app.contact.firstName).toEqual('derp');
    expect(app.contact.lastName).toEqual('herp');

    app.addContact(app.contact);

    expect(app.contact.firstName).toEqual('');
    expect(app.contact.lastName).toEqual('');
  }));

  it('should set selectedContact fields when adding a new item', async(() => {
    app.contact = new Contact('derp', 'herp');
    app.contacts =  [];

    app.addContact(app.contact);

    expect(app.selectedContact.firstName).toEqual('derp');
    expect(app.selectedContact.lastName).toEqual('herp');
  }));

});
