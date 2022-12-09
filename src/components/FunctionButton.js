import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { displayNumberAction } from '../Actions/AppActions'

const NumButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px 5px 20px 20px',
    marginBottom: 10,
    backgroundColor: theme.palette.secondary.main,
}));

const FunctionButton = ({ number }) => {
    const dispatch = useDispatch();
    const { displayValues } = useSelector(state => state.app);
    const onClickAction = () => {
        const values = displayValues;
        switch (number) {
            case "DEL":
                values.pop();
                dispatch(displayNumberAction(values))
                break;
            case "AC":
                dispatch(displayNumberAction([]))
                break;
            default:
                break;
        }
    }
    return (
        <NumButton variant='contained' onClick={onClickAction}>{number}</NumButton>
    )
}

export default FunctionButton