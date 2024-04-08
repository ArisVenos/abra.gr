import React from "react";
import { Flex, Button, ButtonGroup,  Box } from "@chakra-ui/react";
import { MdBuild , MdCall } from "react-icons/md"


const NavBar = () => {
    return (
        <Flex alignItems="center" p={4} bg="#2596be">
            <Button size="lg" variant="ghost" _hover={{ bg: '#2187ab' }} flex={1}>
                ΑΡΧΙΚΗ
            </Button>
            <Button size="lg" variant="ghost" _hover={{ bg: '#2187ab' }} flex={1}>
                ΒΙΒΛΙΑ
            </Button>
            <Button
                size="lg"
                leftIcon={<MdCall />}
                variant="ghost"
                _hover={{ bg: '#2596be' }}
                flex={1}
            >
                ΕΠΙΚΟΙΝΩΝΙΑ
            </Button>
        </Flex>
    );
}

export default NavBar;
