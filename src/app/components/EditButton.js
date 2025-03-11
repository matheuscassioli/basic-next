'use client'

import React from 'react'

const EditButton = ({ id }) => {
    return (
        <button onClick={(e) => console.log(id)}>
            edit
        </button>
    )
}

export default EditButton;