import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const NumButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px 5px 20px 20px',
    marginBottom: 10,
    backgroundColor: theme.palette.secondary.main,
}));

const FunctionButton = ({ number }) => {
    return (
        <NumButton variant='contained'>{number}</NumButton>
    )
}

export default FunctionButton