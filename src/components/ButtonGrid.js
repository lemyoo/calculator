import React from 'react'
import NumberButton from './NumberButton'
import FunctionButton from './FunctionButton'
import Grid from '@mui/material/Grid'

const ButtonGrid = () => {
    return (
        <Grid container spacing={0}>
            <Grid xs={2} item>
                <NumberButton number={7} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={8} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={9} />
            </Grid>
            <Grid xs={3} item>
                <FunctionButton number={"DEL"} />
            </Grid>
            <Grid xs={3} item>
                <FunctionButton number={"AC"} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={4} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={5} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={6} />
            </Grid>
            <Grid xs={3} item>
                <NumberButton number={"X"} />
            </Grid>
            <Grid xs={3} item>
                <NumberButton number={"/"} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={1} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={2} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={3} />
            </Grid>
            <Grid xs={3} item>
                <NumberButton number={"+"} />
            </Grid>
            <Grid xs={3} item>
                <NumberButton number={"-"} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={0} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={"."} />
            </Grid>
            <Grid xs={2} item>
                <NumberButton number={"Exp"} />
            </Grid>
            <Grid xs={3} item>
                <NumberButton number={"Ans"} />
            </Grid>
            <Grid xs={3} item>
                <NumberButton number={"="} />
            </Grid>
        </Grid>
    )
}

export default ButtonGrid