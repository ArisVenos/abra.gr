import React from 'react';
import { AspectRatio, Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel , TabIndicator } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import bg from './images/bg.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';

const BooksB = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="100px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='1100px' >
                    <CardBody p="30px">
                        <Tabs position='relative' variant='unstyled' isFitted>
                            <TabList>
                                <Tab> <strong>No 6</strong></Tab>
                                <Tab> <strong>No 7</strong></Tab>
                                <Tab> <strong>No 8</strong></Tab>
                                <Tab> <strong>No 9</strong></Tab>
                                <Tab> <strong>No 10</strong></Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                            <TabPanels>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s2} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής </Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1 .Η ΠΕΝΤΑΜΟΡΦΗ ΚΑΙ ΤΟ ΤΕΡΑΣ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2. ΝΤΟΝΤΟ</Td>
                                                        <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3. Ο ΣΠΙΡΤΟΥΛΗΣ (και η παράγκο των θαυμάτων)</Td>
                                                        <Td isNumeric>ΚΩΣΤΑΣ ΚΑΡΡΑΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4. Ο ΙΠΤΑΜΕΝΟΣ ΚΟΥΜΠΑΡΑΣ</Td>
                                                        <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5. ΧΡΥΣΑΦΙ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6. ΤΟ ΦΕΓΓΑΡΙ ΣΤΗ ΛΙΜΝΗ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7. ΜΙΑ ΗΜΕΡΑ ΑΡΚΟΥΔΑ</Td>
                                                        <Td isNumeric>ΣΤΑΥΡΟΣ ΞΕΝΙΔΗΣ</Td>
                                                    </Tr>
                                                </Tbody>
                                                <Tfoot>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                <Flex>
                                            <Image src={s2} height="300px" paddingRight="20px"></Image>
                                            <TableContainer>
                                                <Table variant='simple'>
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Όνομα</Th>
                                                            <Th isNumeric>Αφηγητής </Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                            <Td>1.ΤΡΕΙΣ ΖΩΗΡΟΙ ΤΡΑΓΟΙ</Td>
                                                            <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>2.Η ΒΑΣΣΙΛΙΣΑ ΤΥ ΧΙΟΝΙΟΥ</Td>
                                                            <Td isNumeric>ΑΝΤΙΓΟΝΗ ΒΑΛΑΚΟΥ</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>3.Ο ΜΑΓΝΗΤΗΣ ΤΟΥ ΘΑΝΑΣΑΚΗ</Td>
                                                            <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>4.Ο ΣΠΙΡΤΟΥΛΗΣ(βρίσκει καινούργιο καπέλο)</Td>
                                                            <Td isNumeric>ΚΩΣΤΑΣ ΚΑΡΡΑΣ</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>5.ΑΛΒΙΝ Ο ΜΥΡΜΗΓΚΟΦΑΓΟΣ</Td>
                                                            <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                        </Tr>
                                                    </Tbody>
                                                    <Tfoot>
                                                    </Tfoot>
                                                </Table>
                                            </TableContainer>
                                        </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s2} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής </Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1.Η ΑΝΝΑ ΚΑΙ ΤΟ ΚΑΓΚΟΥΡΟ</Td>
                                                        <Td isNumeric>ΑΝΤΙΓΟΝΗ ΒΑΛΑΚΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2.Ο ΙΠΠΟΠΟΤΑΜΟΣ Ο ΠΕΡΣΥ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3.Η ΧΗΝΑ ΜΕ ΤΑ ΧΡΥΣΑ ΑΥΓΑ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4.Ο ΕΓΩΙΣΤΗΣ ΓΙΓΑΝΤΑΣ</Td>
                                                        <Td isNumeric>ΒΑΣΟΣ ΑΝΔΡΟΝΙΔΗΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5.ΤΖΟΤΖΟ(και το χαμένο κάστρο)</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6.Η ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ ΑΝΘΡΩΠΟΥ</Td>
                                                        <Td isNumeric>ΒΑΣΟΣ ΑΝΔΡΟΝΙΔΗΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7.Ο ΜΠΙΜΠΙΚΟΣ Ο ΔΑΣΚΑΛΟΦΑΓΟΣ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                </Tbody>
                                                <Tfoot>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s2} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής </Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1.Ο ΑΜΠΝΤΟΥΛΑΧ ΚΑΙ ΤΟ ΤΕΛΩΝΙΟ</Td>
                                                        <Td isNumeric>ΝΙΚΗΤΑΣ ΤΣΑΚΙΡΟΓΛΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2.Η ΑΝΝΑ ΚΑΙ ΤΟ ΚΑΓΚΟΥΡΟ</Td>
                                                        <Td isNumeric>ΑΝΤΙΓΟΝΗ ΒΑΛΑΚΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3.ΤΖΟΤΖΟ(και το χαμένο κάστρο)</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4.Ο ΨΕΥΤΗΣ ΒΟΣΚΟΣ</Td>
                                                        <Td isNumeric>ΧΡΙΣΤΙΝΑ ΣΤΟΓΙΑ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5.Ο ΑΓΓΕΛΟΣ ΑΓΓΕΛΑΚΗΣ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6.Ο ΜΑΓΟΣ ΤΟΥ ΧΑΜΕΛΙΝΙ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                </Tbody>
                                                <Tfoot>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </TabPanel>
                                </TabPanel>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s2} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής </Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1.ΤΑ ΤΑΞΙΔΙΑ ΤΟΥ ΓΚΙΟΥΛΙΒΕΡ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2.Η ΑΝΝΑ ΚΑΙ ΤΟ ΚΑΓΚΟΥΡΟ</Td>
                                                        <Td isNumeric>ΑΝΤΙΓΟΝΗ ΒΑΛΑΚΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3.ΤΟ ΠΟΔΗΛΑΤΟ ΤΟΥ ΜΑΙΚ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4.ΟΙ ΤΡΕΙΣ ΕΥΧΕΣ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5.ΔΑΒΙΔ ΚΑΙ ΓΟΛΙΑΘ</Td>
                                                        <Td isNumeric>ΝΙΚΗΤΑΣ ΤΣΑΚΙΡΟΓΛΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6.ΤΟ ΜΑΓΕΜΕΝΟ ΑΛΟΓΟ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7.Ο ΜΙΧΑΛΗΣ ΚΑΙ Η ΓΙΑΓΙΑ ΤΟΥ</Td>
                                                        <Td isNumeric>ΧΡΙΣΤΙΝΑ ΣΤΟΓΙΑ</Td>
                                                    </Tr>
                                                </Tbody>
                                                <Tfoot>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </CardBody>
                </Card>
            </Flex>
        </Flex>
        <Flex alignItems='center' justifyContent='center' bg='white' paddingTop="50px">
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                <Link to="/SetA">
                    <Image src={s1} height="300px"></Image>
                </Link>
            </Card>
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                <Link to="/SetB">
                    <Image src={s2} height="300px"></Image>
                </Link>
            </Card>
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' m="10px">
                <Link to="/SetC">
                    <Image src={s3} height="300px"></Image>
                </Link>
            </Card>
        </Flex> 
        <Flex alignItems='center' justifyContent='center' bg='white' paddingTop="20px">
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' marginRight="10px">
                <Link to="/SetD">
                    <Image src={s4} height="300px"></Image>
                </Link>
            </Card>
            <Card boxShadow='lg' borderRadius='lg' width='300px' alignItems='center' justifyContent='center' marginLeft="10px">
                <Link to="/SetE">
                    <Image src={s5} height="300px"></Image>
                </Link>
            </Card>
        </Flex> 
        </div>
    );
};

export default BooksB;
