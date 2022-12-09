import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux';

import { displayNumberAction, answerDisplayAction, pointPresentAction } from '../Actions/AppActions'

const NumButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px 5px 20px 20px',
    marginBottom: 10
}));

const NumberButton = ({ number }) => {
    const dispatch = useDispatch();
    var { displayValues, pointPresent } = useSelector(state => state.app)
    var values = displayValues;

    const importantFunctions = () => {
        values.push(number);
        dispatch(displayNumberAction(values))
        dispatch(answerDisplayAction(values.join("")))
    }

    const solve = (equation) => {
        try {
            if (equation[equation.length - 1] === "+" || equation[equation.length - 1] === "-" || equation[equation.length - 1] === "X" || equation[equation.length - 1] === "\\") {
                return "Syntax Error";
            }
            else if (equation.length === 0) {
                return 0
            }
            else {
                var soln = 0;
                for (var i = 0; i < equation.length; i++) {

                }
                return soln
            }

        } catch (e) {

        }
    }
    const onClickHandler = () => {
        switch (number) {
            case ".":
                if (pointPresent === false) {
                    dispatch(pointPresentAction(true))
                    importantFunctions()
                }
                break;
            case "=":
                dispatch(answerDisplayAction(solve(displayValues)))
                break;
            default:
                importantFunctions()
                break;
        }

    }
    return (
        <NumButton variant='outlined' onClick={onClickHandler} >{number}</NumButton>
    )
}

export default NumberButton