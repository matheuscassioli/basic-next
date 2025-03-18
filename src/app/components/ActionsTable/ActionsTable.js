'use client'

import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaRegFileExcel } from "react-icons/fa";
import ContactsContext from '../../contexts/ContactsContext';
import { downloadExcelDefault } from '../../helper/helper'

const ActionsTableStyle = styled.div` 
    display: flex;
    justify-content: end;

    button{ 
        padding: 8px 12px;
        border: 1px white solid;
        border-radius: 4px;
        margin: 4px 0;
        cursor: pointer; 
    }

    button:active {
        transition: .3s;
        border: 1px green solid;
    }

    svg{
        color: green;
    }
`

const ActionsTable = () => {

    const { contactsFormatted } = useContext(ContactsContext)

    const downloadExcel = e => {
        downloadExcelDefault(e.target.closest('button'), contactsFormatted, `contatos-${new Date()}`)
    }

    return (
        <ActionsTableStyle>
            <button onClick={downloadExcel}>
                <FaRegFileExcel />
            </button>
        </ActionsTableStyle>
    )
}

export default ActionsTable