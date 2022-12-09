import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux';

import { displayNumberAction } from '../Actions/AppActions'

const NumButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px 5px 20px 20px',
    marginBottom: 10
}));

const NumberButton = ({ number }) => {
    const dispatch = useDispatch();
    var { displayValues } = useSelector(state => state.app)
    const onClickHandler = () => {
        var values = displayValues;
        //dispatch(currentNumberAction(number))
        values.push(number);
        dispatch(displayNumberAction(values))
    }
    return (
        <NumButton variant='outlined' onClick={onClickHandler} >{number}</NumButton>
    )
}

export default NumberButton