import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { Card, CardBody, Spacer, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import bg2 from './images/ouranos.png';
import drakos from './images/drakos.png';

const Contact = () => {
  return (
    <Flex flexDirection='column' alignItems='center' bgImage={`url(${bg2})`} paddingBottom="30px">
      <Flex justifyContent='center' paddingTop="20px">
        <Card bg='white' boxShadow='lg' borderRadius='lg' width='900px'>
          <CardBody>
            <center>
              <Heading size='2xl' color="#c7260c">ΕΠΙΚΟΙΝΩΝΙΑ</Heading>
              <Text fontSize='lg' p="10px">
                Τηλέφωνο:
                <Spacer />
                <strong>2109754531</strong>
                <Spacer />
                e-mail:
                <Spacer />
                <strong>abrakatampra@gmail.com</strong>
              </Text>
              <Flex flexDirection="row" paddingTop="50px">
                <form action="https://formspree.io/f/mvoelrbj" method="POST">
                  <FormControl paddingRight="50px">
                    <Heading as="b" color="#c7260c">Επικοινωνήστε μαζί μας!</Heading>
                    <FormLabel paddingTop="20px">Όνομα</FormLabel>
                    <Input type='text' name='name' placeholder='Γράψτε το όνομά σας:' required />
                    <FormLabel paddingTop="20px">Email</FormLabel>
                    <Input type='email' name='_replyto' placeholder='Γράψτε το email σας:' required />
                    <FormLabel paddingTop="20px">Θέμα</FormLabel>
                    <Input type='text' name='subject' placeholder='Γράψτε μας γιατί μας στέλνετε:' required />
                    <FormLabel paddingTop="20px">Μήνυμα</FormLabel>
                    <Textarea name='message' placeholder='Γράψτε το μήνυμά σας:' required />
                    <Button colorScheme="green" type="submit" marginTop="20px">Αποστολή</Button>
                  </FormControl>
                </form>
                <Image src={drakos} height="300px" />
              </Flex>
            </center>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}

export default Contact;
