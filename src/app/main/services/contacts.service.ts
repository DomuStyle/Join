import { Injectable, inject } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  onSnapshot,
} from '@angular/fire/firestore';
import { Contact } from '../../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactList: Contact[] = [];

  unsubContacts;

  firestore: Firestore = inject(Firestore);

  constructor() {
    this.unsubContacts = this.subContactList();
  }

  ngOnDestroy() {
    this.unsubContacts();
  }

  subContactList() {
    return onSnapshot(this.getContactRef(), (contact) => {
      this.contactList = [];

      contact.forEach((e) => {
        this.contactList.push(this.setContactObj(e.data(), e.id));
      });
    });
  }

  async addContact(item: Contact) {
    await addDoc(this.getContactRef(), item).catch((err) => {
      console.error(err);
    });
  }

  getContactRef() {
    return collection(this.firestore, 'contacts');
  }

  setContactObj(obj: any, id: string): Contact {
    return {
      id: id || '',
      type: obj.type || '',
      name: obj.name || '',
      email: obj.email || '',
      phone: obj.phone || '',
    };
  }
}
