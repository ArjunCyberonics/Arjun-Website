import { Container, CssBaseline, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header/Header'
import '../../Components/Styles/Styles.css'

function About() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl" className='dark-bg'>
                <Header />
                <Typography variant='h5' color={'InfoBackground'}> About</Typography>
            </Container>
        </>
    )
}

export default About