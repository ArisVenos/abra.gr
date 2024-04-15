import React from 'react';
import {  Text, Flex, Image } from '@chakra-ui/react';
import { Card, CardBody , Spacer , Heading , FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';
import bg from './images/bg.png';
import drakos from './images/drakos.png';

const Contact = () => {
    return (
        <Flex flexDirection='column' alignItems='center' bg='#4692f0'>
            <Flex justifyContent='center' paddingTop="20px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='900px'>
                    <CardBody>
                        <center>
                            <Heading size='2xl' color="#c7260c">ΕΠΙΚΟΙΝΩΝΙΑ</Heading>
                            <Text as='b' fontSize='xl' p="10px">ΕΚΔΟΣΕΙΣ ΟΡΦΑΝΙΔΗ </Text>
                            <Text fontSize='lg' p="10px">
                                <Spacer />
                                Διεύθυνση:
                                <Spacer /> 
                                Οίτης 15
                                <Spacer />
                                Ηλιούπολη 16344
                                <Spacer />

                                Τηλέφωνο: 	2109754531
                                <Spacer />

                                e-mail:
                                <Spacer />
                                abrakatampra@gmail.com
                            </Text>
                            <Flex flexDirection="row" paddingTop="50px">
                                <FormControl paddingRight="200px">
                                    <center>
                                    <FormLabel>Email address</FormLabel>
                                    </center>
                                    <Input type='email' />
                                    <FormHelperText>We'll never share your email.</FormHelperText>
                                </FormControl>
                                <Image src={drakos} height="200px" ></Image>
                            </Flex>
                        </center>
                    </CardBody>
                </Card>
            </Flex>
            <Image src={bg} maxWidth='100%' paddingTop='100px'/>
        </Flex>
    );
}

export default Contact;