'use client'
import EditContact from '../../components/EditContact'
import styled from 'styled-components'

const TableContainer = styled.div`
    font-size: 16px;
    padding: 20px;
    height: 400px;
    overflow: auto;
`

const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;
    
    tr:nth-child(even) {
        background-color: #494949;
    }
    th, td {
        padding: 12px;
        text-align: left;
        border: 1px solid #ddd;
    } 
    tr:hover {
        background-color: #494949;
    }
`;

const TableContacts = ({ contactsFormatted }) => {

    if (!contactsFormatted || contactsFormatted.length === 0) {
        return <p>Não há contatos :(</p>;
    }

    return (
        <TableContainer>
            <TableStyled>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsFormatted.map(({ id, name, email }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td style={{ textAlign: 'center' }}>
                                <EditContact id={id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableStyled>
        </TableContainer >
    )
}

export default TableContacts