import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Mainpage from './components/Mainpage.jsx';
import Contact from './components/Contact.jsx';
import BooksA from './components/BooksA.jsx';
import BooksB from './components/BooksB.jsx';
import BooksC from './components/BooksC.jsx';
import BooksD from './components/BooksD.jsx';
import BooksE from './components/BooksE.jsx';
import Sets from './components/Sets.jsx';

function App() {
    return (
        <Grid templateAreas={'"nav" "route" "footer"'}>
            <GridItem area='nav' bg='white'><NavBar /></GridItem>
            <GridItem area='route' bg='white'>
                    <Routes>
                        <Route path="/" element={<Mainpage />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/SetA" element={<BooksA />} />
                        <Route path="/SetB" element={<BooksB />} />
                        <Route path="/SetC" element={<BooksC />} />
                        <Route path="/SetD" element={<BooksD />} />
                        <Route path="/SetE" element={<BooksE />} />
                        <Route path="/Sets" element={<Sets />} />
                    </Routes>
            </GridItem>
            <GridItem area='footer'> <Footer /></GridItem>
        </Grid>    
    );
}

export default App;