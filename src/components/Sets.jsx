import React from 'react';
import { AspectRatio, Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import bg from './images/bg.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';

const Sets = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="50px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='900px'>
                    <CardBody p="30px">
                    <Flex alignItems='center' justifyContent='center' bg='white' paddingTop="50px">
                        <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                            <Link to="/setA">
                                <Image src={s1} height="300px"></Image>
                            </Link>
                        </Card>
                        <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                            <Link to="/setB">
                                <Image src={s2} height="300px"></Image>
                            </Link>
                        </Card>
                        <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                            <Link to="/setC">
                                <Image src={s3} height="300px"></Image>
                            </Link>
                        </Card>
                    </Flex> 
                    <Flex alignItems='center' justifyContent='center' bg='white' paddingTop="20px">
                        <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' marginRight="10px">
                            <Link to="/setD">
                                <Image src={s4} height="300px"></Image>
                            </Link>
                        </Card>
                        <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' marginLeft="10px">
                            <Link to="/setE">
                                <Image src={s5} height="300px"></Image>
                            </Link>
                        </Card>
                    </Flex>
                    </CardBody>
                </Card>
            </Flex>
        </Flex> 
        </div>
    );
};

export default Sets;
