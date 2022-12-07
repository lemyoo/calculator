import React from 'react'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
const DisplayView = () => {
    const { displayNumber } = useSelector(state => state.app)
    console.log(displayNumber)
    return (
        <TextField multiline variant='standard' rows={8} defaultValue={displayNumber} />
    )
}

export default DisplayView