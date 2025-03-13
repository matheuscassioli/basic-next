'use client'

import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import styled from 'styled-components';
import { ROUTE_EDIT_CONTACT } from '../routes/routesapi';

const EditButtonStyle = styled.button`
    cursor: pointer;
` 
const EditContact = ({ id }) => {

    const updateContact = async (id, data) => {
        const res = await fetch(ROUTE_EDIT_CONTACT(id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log(result)
    }

    return (
        <EditButtonStyle onClick={(e) => updateContact(id)}>
            <BiSolidEdit />
        </EditButtonStyle>
    )
}

export default EditContact;