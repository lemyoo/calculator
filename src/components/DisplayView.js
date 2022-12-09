import React from 'react'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
const DisplayView = () => {
    const { displayValues } = useSelector(state => state.app)

    return (
        <TextField multiline variant='standard' rows={8} defaultValue={displayValues.join("")} />
    )
}

export default DisplayView