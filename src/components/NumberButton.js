import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux';

import { addNumberToDisplay } from '../Actions/AppActions'

const NumButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px 5px 20px 20px',
    marginBottom: 10
}));

const NumberButton = ({ number }) => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(addNumberToDisplay(number))
    }
    return (
        <NumButton variant='outlined' onClick={onClickHandler}>{number}</NumButton>
    )
}

export default NumberButton