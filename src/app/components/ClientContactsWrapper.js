'use client';

import TableContacts from "../contatos/TableContacts/TableContacts";
import { ContactsProvider } from "../contexts/ContactsContext";


const ClientContactsWrapper = ({ contacts }) => {

    return (
        <ContactsProvider contactsFormatted={contacts}>
            <TableContacts />
        </ContactsProvider>
    );
};

export default ClientContactsWrapper;
