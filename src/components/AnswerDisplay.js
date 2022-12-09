import React from 'react'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'

const AnswerDisplay = () => {
    const { answer } = useSelector(state => state.app)
    return (
        <div><TextField sx={{ width: '100%' }} defaultValue={0} value={answer} disabled /></div>
    )
}

export default AnswerDisplay