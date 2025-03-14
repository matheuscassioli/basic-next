'use client'

import React, { useContext } from 'react'
import styled from 'styled-components';
import { ROUTE_EDIT_CONTACT } from '../routes/routesapi';
import ContactsContext from '../contexts/ContactsContext';
import { FiTrash } from "react-icons/fi";


const DeleteButtonStyle = styled.button`
    cursor: pointer; 

    :hover{
        transition:.3s;
        color: red;
    }
`
const EditContact = ({ id }) => {

    const { contactsFormatted, setContacts } = useContext(ContactsContext)

    const deleteContact = async (id, data) => {
        const res = await fetch(ROUTE_EDIT_CONTACT(id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result) {
            const newArr = contactsFormatted.filter(obj => obj.id !== id)
            setContacts(newArr)
        }
    }

    return (
        <DeleteButtonStyle onClick={(e) => deleteContact(id)}>
            <FiTrash />
        </DeleteButtonStyle>
    )
}

export default EditContact;