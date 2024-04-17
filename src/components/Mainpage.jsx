import React from 'react';
import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import bg from './images/bg.png';

const MainPage = () => {
    return (
        <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="300px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='900px'>
                    <CardBody p="30px">
                        <AspectRatio ratio={16/9}>
                            <iframe
                                title='abracadabra'
                                src='https://www.youtube.com/embed/zkUvaLTEAUA'
                                allowFullScreen
                            />
                        </AspectRatio>
                        <Text mt="4" textAlign="center">Το <strong>ΑΜΠΡΑ ΚΑΤΑΜΠΡΑ</strong>, ένα πλούσιο έργο με την έγκριση 
                        του Υπ.Παιδείας και Θρησκευμάτων, περιλαμβάνει τον κόσμο της παιδικής λογοτεχνίας σε 26
                         πολύχρωμα βιβλία με την υπέροχη εικονογράφηση από ειδικευμένους ζωγράφους καθώς και 26 cd 
                         με ζωντανή θεατρική απόδοση από τους καλύτερους έλληνες ηθοποιούς...
                         </Text>
                    </CardBody>
                </Card>
            </Flex>
        </Flex>
    );
};

export default MainPage;
