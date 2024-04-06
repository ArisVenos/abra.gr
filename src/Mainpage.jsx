import React from 'react';

const MainPage = () => {
    const renderHello = () => {
        let helloText = '';
        for (let i = 0; i < 100; i++) {
            helloText += 'Hello ';
        }
        return helloText;
    };

    return <div>{renderHello()}</div>;
};

export default MainPage;