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

const BooksA = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="100px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='1100px' >
                    <CardBody p="30px">
                        <Tabs position='relative' variant='unstyled' isFitted>
                            <TabList>
                                <Tab> <strong>No 1</strong></Tab>
                                <Tab> <strong>No 2</strong></Tab>
                                <Tab> <strong>No 3</strong></Tab>
                                <Tab> <strong>No 4</strong></Tab>
                                <Tab> <strong>No 5</strong></Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                            <TabPanels>
                                <TabPanel>
                                    <Flex>
                                        <Image src={s1} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric> <strong>Αφηγητής </strong></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1.ΓΚΟΜΠΟΛΙΝΟ(ο γάτος της μάγισσας)</Td>
                                                        <Td isNumeric>ΑΛΙΚΗ ΒΟΥΓΙΟΥΚΛΑΚΗ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2.Ο ΛΑΓΟΣ ΚΑΙ Η ΧΕΛΩΝΑ</Td>
                                                        <Td isNumeric> ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3.ΤΟ ΠΑΠΟΥΤΣΟΔΕΝΤΡΟ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4.ΤΑ ΚΑΙΝΟΥΡΓΙΑ ΡΟΥΧΑ ΤΟΥ ΒΑΣΙΛΙΑ</Td>
                                                        <Td isNumeric>ΚΩΣΤΑΣ ΡΗΓΟΠΟΥΛΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5.ΤΑ ΚΟΚΚΙΝΑ ΣΚΟΥΦΑΚΙΑ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6.ΑΛΝΤΟ-κόμιξ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ-ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7.Ο ΔΡΑΚΟΣ ΤΟΥ ΔΑΣΟΥΣ</Td>
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
                                        <Image src={s1} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1. ΟΙ ΝΑΝΟΙ ΚΑΙ Ο ΤΣΑΓΚΑΡΗΣ</Td>
                                                        <Td isNumeric>ΑΛΕΚΟΣ ΑΛΕΞΑΝΔΡΑΚΗΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2. Ο ΑΦΕΝΤΗΣ ΤΙΓΡΗΣ</Td>
                                                        <Td isNumeric>ΚΩΣΤΑΣ ΡΗΓΟΠΟΥΛΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3. ΑΛΝΤΟ-κόμιξ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ-ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4. ΕΝΑ ΚΟΜΜΑΤΙ ΟΥΡΑΝΙΟ ΤΟΞΟ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ.ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5. ΓΚΟΜΠΟΛΙΝΟ(ο καραβόγατος)</Td>
                                                        <Td isNumeric>ΑΛΙΚΗ ΒΟΥΓΙΟΥΚΛΑΚΗ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6. Η ΛΑΙΜΑΡΓΗ ΑΛΕΠΟΥ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7. ΤΑ ΠΡΟΩΡΑ ΧΡΙΣΤΟΥΓΕΝΝΑ ΤΟΥ ΑΗ ΒΑΣΙΛΗ</Td>
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
                                        <Image src={s1} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1. ΕΝΑΣ ΜΕΓΑΛΟΣ ΜΑΛΛΙΑΡΟΣ ΜΠΑΜΠΟΥΛΑΣ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2. Ο ΓΑΜΟΣ ΤΗΣ ΖΙΖΗΣ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3. ΓΚΟΜΠΟΛΙΝΟ(ο γάτος του ιππότη)</Td>
                                                        <Td isNumeric>ΑΛΙΚΗ ΒΟΥΓΙΟΥΚΛΑΚΗ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4. ΤΟ ΛΙΟΝΤΑΡΙ ΚΑΙ ΤΟ ΠΟΝΤΙΚΙ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5. ΤΟ ΑΥΛΑΚΙ ΤΟΥ ΦΑΝΗ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6. ΧΑΝΣΕΛ ΚΑΙ ΓΚΡΕΤΕΛ</Td>
                                                        <Td isNumeric>ΚΑΤΙΑ ΔΑΝΔΟΥΛΑΚΗ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7. ΑΛΝΤΟ-κόμιξ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ-ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>8. Ο ΓΙΟΣ ΤΟΥ ΗΛΙΟΥ</Td>
                                                        <Td isNumeric>ΚΑΚΙΑ ΑΝΑΛΥΤΗ</Td>
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
                                        <Image src={s1} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1. ΤΟ ΤΑΞΙΔΙ ΤΗΣ ΚΑΤΕΡΙΝΑΣ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ-ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2. Ο ΜΑΝΑΒΗΣ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3. ΓΚΟΜΠΟΛΙΝΟ(ο σπιτόγατος)</Td>
                                                        <Td isNumeric>ΑΛΙΚΗ ΒΟΥΓΙΟΥΚΛΑΚΗ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4. ΟΙ ΓΕΙΤΟΝΕΣ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5. ΤΖΟΤΖΟ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6. Η ΠΡΙΓΚΙΠΙΣΣΑ ΚΑΙ ΤΟ ΡΕΒΥΘΙ</Td>
                                                        <Td isNumeric>ΚΑΤΙΑ ΔΑΝΔΟΥΛΑΚΗ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7. Ο ΤΖΙΤΖΙΚΑΣ ΚΑΙ Ο ΜΕΡΜΥΓΚΑΣ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>8. Ο ΣΕΒΑΧ ΣΤΗΝ ΚΟΙΛΑΔΑ ΤΩΝ ΔΙΑΜΑΝΤΙΩΝ</Td>
                                                        <Td isNumeric>ΑΛΕΚΟΣ ΑΛΕΞΑΝΔΡΑΚΗΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>9. ΟΙ ΠΑΛΙΑΤΣΟΙ</Td>
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
                                        <Image src={s1} height="300px" paddingRight="20px"></Image>
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Όνομα</Th>
                                                        <Th isNumeric>Αφηγητής</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1. Ο ΣΠΙΡΤΟΥΛΗΣ</Td>
                                                        <Td isNumeric>ΚΩΣΤΑΣ ΚΑΡΡΑΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>2. Η ΑΛΕΠΟΥ ΚΑΙ Ο ΚΟΡΑΚΑΣ</Td>
                                                        <Td isNumeric>ΣΤΑΥΡΟΣ ΞΕΝΙΔΗΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>3. Ο ΔΡΟΜΕΑΣ ΚΑΙ ΤΟ ΓΥΦΤΟΠΟΥΛΟ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>4. ΡΑΠΟΥΝΖΕΛ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>5. ΤΟ ΛΑΘΟΣ ΤΟΥ ΣΑΜΜΥ</Td>
                                                        <Td isNumeric>ΣΤΑΥΡΟΣ ΞΕΝΙΔΗΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>6. ΤΖΟΤΖΟ</Td>
                                                        <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>7. Η ΝΕΡΑΙΔΑ Η ΧΟΝΤΡΕΛΑ</Td>
                                                        <Td isNumeric>ΕΛΛΗ ΦΩΤΙΟΥ</Td>
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

export default BooksA;
