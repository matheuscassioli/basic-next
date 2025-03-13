import TableContacts from './TableContacts/TableContacts'

const fetchContacts = async () => {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json()
    return data.users;
}

const page = async () => {

    const contacts = await fetchContacts();
    const contactsFormatted = contacts.map(({ id, firstName, email }) => ({
        id,
        name: firstName,
        email
    }));

    return (
        <TableContacts contactsFormatted={contactsFormatted} />
    )
}

export default page