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

const BooksD = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="100px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='1100px' >
                    <CardBody p="30px">
                        <Tabs position='relative' variant='unstyled' isFitted>
                            <TabList>
                                <Tab> <strong>No 16</strong></Tab>
                                <Tab> <strong>No 17</strong></Tab>
                                <Tab> <strong>No 18</strong></Tab>
                                <Tab> <strong>No 19</strong></Tab>
                                <Tab> <strong>No 20</strong></Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                            <TabPanels>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s4} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Τίτλος</Th>
                                                    <Th isNumeric>Αφηγητής</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>1. Ο ΘΕΜΙΣ ΜΕΓΑΛΩΝΕΙ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. ΤΟ ΚΟΡΙΤΣΙ ΜΕ ΤΑ ΜΑΓΚΟ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. Ο ΕΠΙΣΤΑΤΗΣ ΚΟΚΟΡΑΣ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Ο ΠΑΠΟΥΤΣΟΜΕΝΟΣ ΓΑΤΟΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. Ο ΔΡΑΚΟΥΛΗΣ ΔΡΑΚΟΥΛΙΝΟΣ</Td>
                                                    <Td isNumeric>ΣΩΤΗΡΗΣ ΜΟΥΣΤΑΚΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΠΙΝΟΚΙΟ(στη χώρα του γλεντιού)</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
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
                                        <Image src={s4} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Τίτλος</Th>
                                                    <Th isNumeric>Αφηγητής</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>1. ΓΟΥΛΙΕΛΜΟΣ ΤΕΛΛΟΣ</Td>
                                                    <Td isNumeric>ΑΓΓΕΛΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. Ο ΠΑΠΙΟΣ Ο ΠΛΟΙΑΡΧΟΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. ΠΙΝΟΚΙΟ(η επιστροφή)</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Ο ΑΡΑΧΝΟΥΛΗΣ</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΗΣ ΠΕΤΡΑΤΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. ΤΟ ΠΑΖΛ ΤΗΣ ΖΩΖΟΣ</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΑ ΔΗΜΗΤΡΙΑΔΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΤΟ ΜΥΣΤΙΚΟ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7. ΤΟ ΛΙΟΝΤΑΡΙ ΚΑΙ ΤΟ ΠΑΓΩΝΙ</Td>
                                                    <Td isNumeric>ΑΓΓΕΛΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ</Td>
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
                                        <Image src={s4} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Τίτλος</Th>
                                                    <Th isNumeric>Αφηγητής</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>1. ΧΑΙΝΤΙ</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΑ ΔΗΜΗΤΡΙΑΔΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. Ο ΝΕΟΣ ΚΑΙ Ο ΓΕΡΟΣ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. Ο ΙΠΠΟΤΗΣ ΚΑΙ Ο ΔΡΑΚΟΣ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Ο ΒΑΤΡΑΧΟΣ ΠΡΙΓΚΙΠΑΣ</Td>
                                                    <Td isNumeric>ΞΕΝΙΑ ΚΑΛΟΓΕΡΟΠΟΥΛΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. Ο ΑΣΤΕΡΟΥΛΗΣ ΚΑΙ Η ΑΣΤΕΡΟΥΛΑ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΕΞΩ ΤΑ ΜΟΥΛΑΡΙΑ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                        </TableContainer>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s4} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Τίτλος</Th>
                                                    <Th isNumeric>Συγγραφέας</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>1. Ο ΤΖΑΚ ΚΑΙ Η ΦΑΣΟΛΙΑ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. ΓΙΑΤΙ Η ΚΑΜΗΛΟΠΑΡΔΑΛΗ ΔΕ ΜΙΛΑΕΙ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. Ο ΣΕΒΑΧ ΣΤΑ ΠΑΡΑΞΕΝΑ ΝΗΣΙΑ</Td>
                                                    <Td isNumeric>ΝΙΚΟΣ ΒΑΣΤΑΡΔΗΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. ΤΟ ΒΙΒΛΙΟ ΜΕ ΤΑ ΖΩΑ</Td>
                                                    <Td isNumeric>ΝΙΚΟΣ ΒΑΣΤΑΡΔΗΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. Η ΘΕΙΑ ΛΙΛΗ</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΑ ΔΗΜΗΤΡΙΑΔΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΧΑΙΝΤΙ(στο σπίτι του παππού)</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΑ ΔΗΜΗΤΡΙΑΔΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7. ΤΟ ΔΕΝΤΡΟ ΚΑΙ Ο ΦΡΑΧΤΗΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
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
                                        <Image src={s4} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Τίτλος</Th>
                                                    <Th isNumeric>Συγγραφέας</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>ΡΟΥΜΠΕΛΣΤΙΛΣΧΕΝ</Td>
                                                    <Td isNumeric>ΜΙΡΑΝΤΑ ΚΟΥΝΕΛΑΚΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>ΧΑΙΝΤΙ(στην πόλη)</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΑ ΔΗΜΗΤΡΙΑΔΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>Η ΚΥΡΑ ΤΗΣ ΛΙΜΝΗΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>ΤΟ ΒΙΒΛΙΟ ΜΕ ΤΑ ΖΩΑ</Td>
                                                    <Td isNumeric>ΝΙΚΟΣ ΒΑΣΤΑΡΔΗΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>ΣΑΝ ΣΤΟ ΣΠΙΤΙ ΣΟΥ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>Η ΜΙΚΡΗ ΕΝΥΔΡΙΔΑ</Td>
                                                    <Td isNumeric>ΜΙΡΑΝΤΑ ΚΟΥΝΕΛΑΚΗ</Td>
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

export default BooksD;
