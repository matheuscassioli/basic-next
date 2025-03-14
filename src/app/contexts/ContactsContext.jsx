'use client';
import { createContext, useState } from 'react';

const ContactsContext = createContext(null);

export const ContactsProvider = ({ contactsFormatted, children }) => {
    const [contacts, setContacts] = useState(contactsFormatted || []);

    return (
        <ContactsContext.Provider value={{ contactsFormatted: contacts, setContacts }}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsContext;  
