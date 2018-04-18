'use strict';

const Contact = require('../json/contact');

class ContactRepository {
    constructor() {
        this.contacts = new Map([
            [1, new Contact(1, 'Name 1', 'email1@email.na', '01792 123456')],
            [2, new Contact(2, 'Name 2', 'email2@email.na', '07812 223233')],
            [3, new Contact(3, 'Name 3', 'email3@email.na', '01234 983312')],
            [4, new Contact(4, 'Name 4', 'email4@email.na', '01232 123123')]
        ]);
    }

    getById(id) {
        return this.contacts.get(id);
    }

    getAll() {
        return Array.from(this.contacts.values());
    }

    remove() {
        const keys = Array.from(this.contacts.keys());
        this.contacts.delete(keys[keys.length - 1]);
    }

    save(contact) {
        if (this.getById(contact.id) !== undefined) {
            this.contacts[contact.id] = contact;
            return 'Updated Contact with id=' + contact.id;
        }
        else {
            this.contacts.set(contact.id, contact);
            return 'Added Contact with id=' + contact.id;
        }
    }
}

const contactRepository = new ContactRepository();

module.exports = contactRepository;
