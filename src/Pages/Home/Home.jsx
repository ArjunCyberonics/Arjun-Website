import React from 'react'
import { MainImg, cameraIcon, codeIcon, jsIcon, reactIcon } from '../../Constants/ImagePath/Images'
import { Container, CssBaseline, Typography } from '@mui/material'
import Header from '../../Components/Header/Header'
import '../../Components/Styles/Styles.css'

function Home() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl" className='dark-bg'>
                <Header />
                <Typography variant='h5' color={'InfoBackground'}> Home page</Typography>
            </Container>
        </>
    )
}

export default Home