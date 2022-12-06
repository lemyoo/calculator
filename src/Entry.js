import React from 'react'
import NumberButton from './components/NumberButton'
import FunctionButton from './components/FunctionButton'
import Grid from '@mui/material/Grid'
import './Entry.css'

function Entry() {
    return (
        <div className='App'>
            <Grid container spacing={0}>
                <Grid xs={2}>
                    <NumberButton number={7} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={8} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={9} />
                </Grid>
                <Grid xs={3}>
                    <FunctionButton number={"DEL"} />
                </Grid>
                <Grid xs={3}>
                    <FunctionButton number={"AC"} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={4} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={5} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={6} />
                </Grid>
                <Grid xs={3}>
                    <NumberButton number={"X"} />
                </Grid>
                <Grid xs={3}>
                    <NumberButton number={"/"} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={1} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={2} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={3} />
                </Grid>
                <Grid xs={3}>
                    <NumberButton number={"+"} />
                </Grid>
                <Grid xs={3}>
                    <NumberButton number={"-"} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={0} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={"."} />
                </Grid>
                <Grid xs={2}>
                    <NumberButton number={"Exp"} />
                </Grid>
                <Grid xs={3}>
                    <NumberButton number={"Ans"} />
                </Grid>
                <Grid xs={3}>
                    <NumberButton number={"="} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Entry