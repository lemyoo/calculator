import React from 'react'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
const DisplayView = () => {
    const { displayValues } = useSelector(state => state.app)

    return (
        <TextField multiline variant='outlined' rows={8} defaultValue={displayValues.join("")} sx={{ width: '100%' }} />
    )
}

export default DisplayView