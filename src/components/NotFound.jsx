import React from 'react';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <h1>Ουπς! Η σελίδα που ψάχνεις δεν υπάρχει.</h1>
            <p>Μπορείς να πατήσεις το κουμπί ΑΡΧΙΚΗ για να επιστρέψεις στην αρχική σελίδα!</p>
        </div>
    );
};

export default NotFound;
