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

const BooksC = () => {
    return (
        <div>
            <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg})`} >
            <Flex justifyContent='center' paddingTop="20px" paddingBottom="100px">
                <Card bg='white' boxShadow='lg' borderRadius='lg' width='1100px' >
                    <CardBody p="30px">
                        <Tabs position='relative' variant='unstyled' isFitted>
                            <TabList>
                                <Tab> <strong>No 11</strong></Tab>
                                <Tab> <strong>No 12</strong></Tab>
                                <Tab> <strong>No 13</strong></Tab>
                                <Tab> <strong>No 14</strong></Tab>
                                <Tab> <strong>No 15</strong></Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                            <TabPanels>
                            <TabPanel>
                                <Flex>
                                    <Image src={s3} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>2.ΠΙΝΟΚΙΟ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3.Ο ΣΚΥΛΟΣ ΚΑΙ ΤΟ ΚΟΚΚΑΛΟ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4.Η ΜΑΓΕΜΕΝΗ ΒΑΣΙΛΟΠΟΥΛΑ</Td>
                                                    <Td isNumeric>ΕΛΕΝΗ ΧΑΤΖΗΑΡΓΥΡΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5.Ο ΜΕΜΑΣ ΑΝΑΠΟΔΕΑΣ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6.Ο ΣΟΥΝΤΙ ΚΑΙ Ο ΤΙΓΡΗΣ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7.ΤΟ ΠΟΔΗΛΑΤΟ ΤΟΥ ΜΑΙΚ</Td>
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
                                    <Image src={s3} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1.Ο ΣΚΛΗΡΟΣ ΠΡΙΓΚΙΠΑΣ</Td>
                                                    <Td isNumeric>ΓΙΑΝΝΗΣ ΦΕΡΤΗΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2.ΤΑ ΑΥΤΟΚΙΝΗΤΑΚΙΑ ΤΟΥ ΧΑΡΗ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3.Ο ΔΡΟΜΕΑΣ ΚΑΙ ΤΟ ΓΥΦΤΟΠΥΛΟ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4.ΤΟ ΠΡΩΤΟ ΠΕΤΑΓΜΑ</Td>
                                                    <Td isNumeric>ΕΛΕΝΗ ΧΑΤΖΗΑΡΓΥΡΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5.ΟΙ ΔΥΟ ΠΟΝΤΙΚΙΝΕΣ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6.ΠΙΝΟΚΙΟ(το κουκλοθέατρο)</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7.Ο ΨΩΜΑΝΘΡΩΠΟΣ</Td>
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
                                        <Image src={s3} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1.ΤΟ ΤΣΑΚΜΑΚΙ</Td>
                                                    <Td isNumeric>ΚΑΤΙΑ ΔΑΝΔΟΥΛΑΚΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2.ΤΑ ΑΥΤΟΚΙΝΗΤΑΚΙΑ ΤΟΥ ΧΑΡΗ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3.ΕΝΑ ΓΕΝΝΑΙΟ ΚΟΡΙΤΣΙ</Td>
                                                    <Td isNumeric>ΕΡΣΥ ΜΑΛΙΚΕΝΖΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4.ΠΙΝΟΚΙΟ(το χωράφι των θαυμάτων)</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5.ΟΙ ΤΡΕΙΣ ΦΑΛΑΚΡΕΣ</Td>
                                                    <Td isNumeric>ΖΑΝΟ ΝΤΑΝΙΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6.ΤΟ ΑΣΧΗΜΟΠΑΠΟ</Td>
                                                    <Td isNumeric>ΚΑΤΙΑ ΔΑΝΔΟΥΛΑΚΗ</Td>
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
                                        <Image src={s3} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1.Ο ΘΗΣΕΑΣ ΚΑΙ Ο ΜΗΝΩΤΑΥΡΟΣ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2.Ο ΑΝΕΜΟΣ ΚΑΙ Ο ΗΛΙΟΣ</Td>
                                                    <Td isNumeric>ΕΡΣΥ ΜΑΛΙΚΕΝΖΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3.ΠΙΝΟΚΙΟ(η αναζήτηση)</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4.ΤΑΞΙΔΙ ΜΕ ΒΑΡΕΛΙ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5.ΟΙ ΚΟΚΚΙΝΕΣ ΤΙΡΑΝΤΕΣ</Td>
                                                    <Td isNumeric>ΕΡΣΥ ΜΑΛΙΚΕΝΖΟΥ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6.Ο ΔΡΑΚΟΥΛΗΣ ΔΡΑΚΟΥΛΙΝΟΣ</Td>
                                                    <Td isNumeric>ΣΩΤΗΡΗΣ ΜΟΥΣΤΑΚΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7.Η ΣΤΑΧΤΟΠΟΥΤΑ</Td>
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
                                        <Image src={s3} height="300px" paddingRight="20px"></Image>
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
                                                    <Td>1.ΤΟ ΚΟΥΤΙ ΤΗΣ ΠΑΝΔΩΡΑΣ</Td>
                                                    <Td isNumeric>ΑΛΕΚΑ ΚΑΤΣΕΛΗ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2.Η ΚΥΡΑ ΣΑΥΡΑ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>3.ΠΙΝΟΚΙΟ(η υπόσχεση της νεράιδας)</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>4.Ο ΔΡΑΚΟΥΛΗΣ ΔΡΑΚΟΥΛΙΝΟΣ</Td>
                                                    <Td isNumeric>ΣΩΤΗΡΗΣ ΜΟΥΣΤΑΚΑΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>5.ΤΟ ΟΜΠΡΕΛΙΝΟ</Td>
                                                    <Td isNumeric>ΜΑΤΙΝΑ ΚΑΡΡΑ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>6.ΤΟ ΙΠΤΑΜΕΝΟ ΣΑΚΚΑΚΙ</Td>
                                                    <Td isNumeric>ΣΤΕΦΑΝΟΣ ΛΗΝΑΙΟΣ</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>7.ΤΑ ΤΡΙΑ ΓΟΥΡΟΥΝΑΚΙΑ</Td>
                                                    <Td isNumeric>ΣΩΤΗΡΗΣ ΜΟΥΣΤΑΚΑΣ</Td>
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

export default BooksC;
