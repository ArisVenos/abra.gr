import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Mainpage from './components/Mainpage.jsx';
import Contact from './components/Contact.jsx';

function App() {
    return (
        <Grid templateAreas={'"nav" "route" "footer"'}>
            <GridItem area='nav' bg='white'><NavBar /></GridItem>
            <GridItem area='route' bg='white'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Mainpage />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </GridItem>
            <GridItem area='footer'> <Footer /></GridItem>
        </Grid>    
    );
}

export default App;