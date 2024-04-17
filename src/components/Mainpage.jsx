import React from 'react';
import { AspectRatio, Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import bg from './images/bg.png';

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
            <Card bg='#4692f0' boxShadow='lg' borderRadius='lg' width='900px' alignItems='center' justifyContent='center' >
                <Text textAlign="center" width="500px" textColor="white">Το ΑΜΠΡΑ ΚΑΤΑΜΠΡΑ απευθύνεται σε παιδιά ηλικίας έως 12 ετών και δίνει μια νέα διάσταση στο παιδικό βιβλίο. 
                    Η υπέροχη αυθεντική μουσική επένδυση συνοδεύει γλυκά την παιδική φαντασία. 
                    Η παλέτα και η έμπνευση των πιο γνωστών καλλιτεχνών του είδους, υπογράφουν την εικονογράφηση. 
                    Οι μικροί μας φίλοι ταυτόχρονα μαθαίνουν να διαβάζουν, να ζωγραφίζουν και να ακούν.
                </Text>
            </Card>
        </Flex> 
        </div>
    );
};

export default MainPage;
