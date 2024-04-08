import React from 'react';
import { AspectRatio, Box } from '@chakra-ui/react';

const MainPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <AspectRatio maxW='700px' ratio={16/9} style={{ margin: '0 auto' , marginTop: '20px'}}>
                <iframe
                    title='abracadabra'
                    src='https://www.youtube.com/embed/zkUvaLTEAUA'
                    allowFullScreen
                />
            </AspectRatio>
            <Box mt={4} >
                <p>Your text goes here</p>
            </Box>
        </div>
    );
};

export default MainPage;
