import React from 'react';
import { AspectRatio, Box, Flex, Image } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import bg from './images/bg.png';

const MainPage = () => {
    return (
        <Flex flexDirection='column' alignItems='center' bg='#4692f0'>
            <Flex justifyContent='center' paddingTop="20px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='900px'>
                    <CardBody>
                        <AspectRatio ratio={16/9}>
                            <iframe
                                title='abracadabra'
                                src='https://www.youtube.com/embed/zkUvaLTEAUA'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </CardBody>
                </Card>
            </Flex>
            <Image src={bg} maxWidth='100%' paddingTop='100px'/>
        </Flex>
    );
};

export default MainPage;
