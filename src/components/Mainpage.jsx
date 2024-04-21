import React from 'react';
import { AspectRatio, Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import bg from './images/bg.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';

const MainPage = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="100px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='900px'>
                    <CardBody p="30px">
                        <AspectRatio ratio={16/9}>
                            <iframe
                                title='abracadabra'
                                src='https://www.youtube.com/embed/zkUvaLTEAUA'
                                allowFullScreen
                            />
                        </AspectRatio>
                        <Text mt="4" textAlign="center" paddingTop="20px">Το <strong>ΑΜΠΡΑ ΚΑΤΑΜΠΡΑ</strong>, ένα πλούσιο έργο με την έγκριση 
                        του Υπ.Παιδείας και Θρησκευμάτων, περιλαμβάνει τον κόσμο της παιδικής λογοτεχνίας σε 26
                         πολύχρωμα βιβλία με την υπέροχη εικονογράφηση από ειδικευμένους ζωγράφους καθώς και 26 cd 
                         με ζωντανή θεατρική απόδοση από τους καλύτερους έλληνες ηθοποιούς: <Spacer />
                          <strong>Αλ. Βουγιουκλάκη, Στεφ. Ληναίος, Ελ. Φωτίου, Κωστ. Ρηγόπουλος,
                          Αλ. Αλεξανδράκης, Κ.Δανδουλάκη, Κ,Αναλυτή, Κωστ.Καρράς, Σ.Ξενίδης </strong> και πολλοί άλλοι.
                         </Text>
                    </CardBody>
                </Card>
            </Flex>
        </Flex>
        <Flex alignItems='center' justifyContent='center' bg='white' paddingTop="50px">
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                <Image src={s1} height="300px"></Image>
            </Card>
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                <Image src={s2} height="300px"></Image>
            </Card>
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                <Image src={s3} height="300px"></Image>
            </Card>
        </Flex> 
        <Flex alignItems='center' justifyContent='center' bg='white' paddingTop="20px">
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' marginRight="10px">
                <Image src={s4} height="300px"></Image>
            </Card>
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' marginLeft="10px">
                <Image src={s5} height="300px"></Image>
            </Card>
        </Flex> 
        </div>
    );
};

export default MainPage;
