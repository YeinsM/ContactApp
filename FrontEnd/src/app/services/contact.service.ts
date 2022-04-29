import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  url = 'https://localhost:5000/api';

  store(contact: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(`${this.url}/contacts`, {
      name: contact.name,
      lastName: contact.lastName,
      email: contact.email,
      phones: contact.phones,
    });
  }

  getAll(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(`${this.url}/contacts`);
  }

  update(contact: ContactModel): Observable<ContactModel> {
    return this.http.patch<ContactModel>(
      `${this.url}/contacts/${contact.contactId}`,
      {
        name: contact.name,
        lastName: contact.lastName,
        email: contact.email,
        phones: contact.phones,
      }
    );
  }

  delete(id: String): Observable<ContactModel[]> {
    return this.http.delete<ContactModel[]>(
      `${this.url}/contacts/${Number(id)}`
    );
  }

  getById(id: String): Observable<ContactModel> {
    return this.http.get<ContactModel>(`${this.url}/contacts/${Number(id)}`);
  }
}
