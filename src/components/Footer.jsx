import React from "react";
import { Text , Image } from "@chakra-ui/react";
import logo from "./images/logo.png";

const Footer = () => {
    return (
        <div style={{ height: '100px', background: 'white', color: 'white' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={logo} maxW="200px" marginTop="60px" />
            <Text as='b' color="#c7260c" fontSize='20px' marginTop="60px" marginLeft="50px"> abrakatampra@gmail.com </Text>
            <Text as='b' color="#c7260c" fontSize='20px' marginTop="60px" marginLeft="50px"> 2109754531 </Text>

        </div>
    );
}

export default Footer;