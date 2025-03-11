
import EditButton from '../components/EditButton'

const fetchContacts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return data;
}

const page = async () => {

    const contacts = await fetchContacts();
    const contactsFormated = contacts.map(item => {
        const { company, address, phone, website, username, ...rest } = item;
        return rest;
    });

    return (
        <div style={{ fontSize: '16px' }}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsFormated.map((contactsKey) => {
                        const { id } = contactsKey
                        return < tr key={id}   >
                            {Object.keys(contactsKey).map(cellValue =>
                                <td key={cellValue}>{contactsKey[cellValue]}</td>
                            )}
                            <td>
                                <EditButton id={id} />
                            </td>
                        </tr>
                    }
                    )}
                </tbody>
            </table >
        </div >
    )
}

export default page