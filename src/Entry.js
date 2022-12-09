import React from 'react'
import Grid from '@mui/material/Grid'
import './Entry.css'
import ButtonGrid from './components/ButtonGrid'
import DisplayView from './components/DisplayView'
import AnswerDisplay from './components/AnswerDisplay'

function Entry() {
    return (
        <div className='App'>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={12}>
                    <DisplayView />
                </Grid>
                <Grid item xs={12}>
                    <AnswerDisplay />
                </Grid>
                <Grid item xs={12}>
                    <ButtonGrid />
                </Grid>
            </Grid>
        </div>
    )
}

export default Entry