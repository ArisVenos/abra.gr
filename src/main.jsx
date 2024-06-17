import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider> {/* Wrap App with ChakraProvider */}
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
