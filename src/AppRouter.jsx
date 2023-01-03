import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Home'

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/books" element={<BookList />} /> */}
        </Routes>
    )
}

export default AppRouter