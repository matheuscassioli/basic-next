import ClientContactsWrapper from '../components/ClientContactsWrapper'

const fetchContacts = async () => {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return data.users;
};

const Page = async () => {
    const contacts = await fetchContacts();
    const contactsFormatted = contacts.map(({ id, firstName, email }) => ({
        id,
        name: firstName,
        email
    }));

    return <ClientContactsWrapper contacts={contactsFormatted} />;
};

export default Page;
