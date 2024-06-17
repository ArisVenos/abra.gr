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

const BooksE = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="100px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='1100px' >
                    <CardBody p="30px">
                        <Tabs position='relative' variant='unstyled' isFitted>
                            <TabList>
                                <Tab> <strong>No 21</strong></Tab>
                                <Tab> <strong>No 22</strong></Tab>
                                <Tab> <strong>No 23</strong></Tab>
                                <Tab> <strong>No 24</strong></Tab>
                                <Tab> <strong>No 25</strong></Tab>
                                <Tab> <strong>No 26</strong></Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                            <TabPanels>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s5} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1. Ο ΓΕΝΝΑΙΟΣ ΡΑΦΤΑΚΟΣ</Td>
                                                    <Td isNumeric>ΧΡΗΣΤΟΣ ΠΑΡΛΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. Ο ΛΥΚΟΣ ΠΟΥ ΝΤΥΘΗΚΕ ΠΡΟΒΑΤΟ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. ΠΙΟ ΣΟΦΗ ΚΑΙ ΑΠΟ ΤΟΝ ΤΣΑΡΟ</Td>
                                                    <Td isNumeric>ΧΡΗΣΤΟΣ ΠΑΡΛΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Η ΡΙΤΑ ΚΑΙ ΤΟ ΚΟΥΡΣΑΚΙ</Td>
                                                    <Td isNumeric>ΜΙΡΑΝΤΑ ΚΟΥΝΕΛΑΚΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. ΧΑΙΝΤΙ(πάλι στο βουνό)</Td>
                                                    <Td isNumeric>ΔΗΜΗΤΡΑ ΔΗΜΗΤΡΙΑΔΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. Ο ΔΥΝΑΤΟΣ ΛΑΓΟΣ</Td>
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
                                        <Image src={s5} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1. ΤΟ ΑΠΙΘΑΝΟ ΤΑΞΙΔΙ ΤΟΥ ΜΙΚΗ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. Ο ΒΑΣΙΛΙΑΣ ΜΙΔΑΣ</Td>
                                                    <Td isNumeric>ΧΡΥΣΟΥΛΑ ΔΙΑΒΑΤΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. ΓΕΥΜΑ ΜΕ ΕΝΑ ΘΑΥΜΑΤΟΠΟΙΟ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. ΟΙ ΕΝΤΕΚΑ ΑΓΡΙΟΚΥΚΝΟΙ</Td>
                                                    <Td isNumeric>ΧΡΥΣΟΥΛΑ ΔΙΑΒΑΤΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. Ο ΣΠΙΡΤΟΥΛΗΣ</Td>
                                                    <Td isNumeric>ΚΩΣΤΑΣ ΚΑΡΡΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΤΖΟΝΥ Ο ΑΚΡΟΒΑΤΗΣ</Td>
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
                                        <Image src={s5} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1. Ο ΣΠΙΡΤΟΥΛΗΣ</Td>
                                                    <Td isNumeric>ΚΩΣΤΑΣ ΚΑΡΡΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. ΤΟ ΑΠΙΘΑΝΟ ΤΑΞΙΔΙ ΤΟΥ ΜΙΚΗ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. Η ΧΡΥΣΟΜΑΛΛΟΥΣΑ</Td>
                                                    <Td isNumeric>ΜΙΡΑΝΤΑ ΚΟΥΝΕΛΑΚΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Η ΒΑΡΚΑΔΑ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. ΤΟ ΝΕΡΑΙΔΕΝΙΟ ΛΑΒΑΡΟ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΤΟ ΠΙΑΝΟ ΚΑΙ Ο ΕΛΕΦΑΝΤΑΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7. Ο ΒΑΤΡΑΧΟΣ, Ο ΓΑΤΟΣ, ΚΑΙ Η ΚΟΤΟΥΛΑ</Td>
                                                    <Td isNumeric>ΜΙΡΑΝΤΑ ΚΟΥΝΕΛΑΚΗ</Td>
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
                                        <Image src={s5} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1. ΤΑ ΟΝΕΙΡΑ ΤΗΣ ΦΡΑΝΤΖΕΣΚΑΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. ΜΕΤΡΩΝΤΑΣ ΤΑ ΚΟΤΟΠΟΥΛΑ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. Ο ΑΓΚΑΘΟΥΛΗΣ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Ο ΜΟΛΥΒΕΝΙΟΣ ΣΤΡΑΤΙΩΤΗΣ</Td>
                                                    <Td isNumeric>ΜΑΡΘΑ ΒΟΥΡΤΣΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. ΣΤΟ ΒΑΣΙΛΕΙΟ ΤΗΣ ΦΩΚΙΑΣ</Td>
                                                    <Td isNumeric>ΜΑΡΘΑ ΒΟΥΡΤΣΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΑΛΝΤΟ-κόμιξ</Td>
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
                                        <Image src={s5} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1. Η ΚΟΚΚΙΝΟΣΚΟΥΦΙΤΣΑ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. Ο ΕΥΤΥΧΙΣΜΕΝΟΣ ΠΡΙΓΚΙΠΑΣ</Td>
                                                    <Td isNumeric>ΘΑΝΟΣ ΚΩΤΣΟΠΟΥΛΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. Η ΧΑΖΟΥΛΑ ΚΟΤΑ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. ΑΛΝΤΟ-κόμιξ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. ΔΙΑΓΩΝΙΣΜΟΣ ΤΟΥΡΤΑΣ</Td>
                                                    <Td isNumeric>ΚΩΣΤΑΣ ΡΗΓΟΠΟΥΛΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. ΤΟ ΣΦΥΡΙ ΤΟΥ ΘΟΡ</Td>
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
                                        <Image src={s5} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1. Η ΤΟΣΟΔΟΥΛΑ</Td>
                                                    <Td isNumeric>ΞΕΝΙΑ ΚΑΛΟΓΕΡΟΠΟΥΛΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2. ΜΙΑ ΚΡΥΨΩΝΑ ΓΙΑ ΤΟΝ ΕΛΕΦΑΝΤΑ</Td>
                                                    <Td isNumeric>ΜΑΙΡΗ ΙΓΓΛΕΣΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3. ΕΝΑ ΛΙΟΝΤΑΡΙ ΣΤΟ ΣΧΟΛΕΙΟ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4. Ο ΠΕΙΡΑΧΤΗΡΗΣ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5. ΑΛΝΤΟ-κόμιξ</Td>
                                                    <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6. Ο ΚΑΜΙ ΚΑΙ ΟΙ ΓΑΤΕΣ ΤΟΥ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
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

export default BooksE;
