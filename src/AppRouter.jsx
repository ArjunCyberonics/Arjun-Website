import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import { Container } from '@mui/material'
import Projects from './Pages/Projects/Projects'
import Entertainment from './Pages/Entertainment/Entertainment'
import Contact from './Pages/Contact/Contact'
import ImageGallery from './Pages/ImageGallery/ImageGallery'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/image-gallery' element={<ImageGallery />} />
                <Route path='/entertainment' element={<Entertainment />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default AppRouter