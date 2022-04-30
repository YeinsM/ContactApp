import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ContactModel } from '../models/contact.model';
import contacts from '../assets/json/initialState.json';

const STORENAME = 'Contacts';
const NEXTID = 'NextID';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) { }
  url = 'https://localhost:5000/api';

  private updateStorage(value: string, storage: string) {
    localStorage.setItem(storage, value);
  }

  private updateContactStorage(contacts: ContactModel[]) {
    this.updateStorage(JSON.stringify(contacts), STORENAME);
  }

  private getStorage(storage: string): string {
    const value = localStorage.getItem(storage)
    return value ?? "";
  }

  private getContactStorage(): ContactModel[] {
    const contacts = localStorage.getItem(STORENAME)
    return contacts ? JSON.parse(contacts) : [];
  }

  private isPepe = true;

  getJson = (): ContactModel[] => contacts

  store(contact: ContactModel) {
    const contacts = this.getContactStorage();
    const contactId = this.getStorage(NEXTID);

    this.updateContactStorage([...contacts, {
      ...contact,
      contactId
    }])
    this.updateStorage((Number(contactId) + 1).toString(), NEXTID)
  }

  getAll(): ContactModel[] {
    let contacts = this.getContactStorage();
    if (this.isPepe && !contacts.length) {
      contacts = this.getJson();
      this.updateContactStorage(contacts);
      this.updateStorage((contacts.length + 1).toString(), NEXTID)

      this.isPepe = false
    }
    return contacts;
  }

  update(updatedContact: ContactModel) {
    const contacts = this.getContactStorage();

    this.updateContactStorage(contacts.map((contact) => {
      if (contact.contactId === updatedContact.contactId) {
        return updatedContact;
      }
      return contact;
    }));
  }

  delete(id: String) {
    const contacts = this.getContactStorage();
    this.updateContactStorage(contacts.filter((contact) => contact.contactId !== id))
  }

  getById(id: String): ContactModel | undefined {
    return this.getContactStorage().find(contact => contact.contactId === id);
  }
}
