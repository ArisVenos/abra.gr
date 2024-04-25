import React from "react";
import { Flex, Button, Image, Center } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import logo from "./images/logo.png";

const NavBar = () => {
  const navigateToContact = () => {
    window.location.href = "/Contact";
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };
  const navigateToBooks = () => {
    window.location.href = "/Sets";
  };

  return (
    <div style={{ backgroundColor: "#4692f0" }}>
      <Center>
        <Image src={logo} maxW="200px" />
      </Center>
      <Center style={{ backgroundColor: "white" }}>
        <Flex style={{ backgroundColor: "white" }}>
          <Button
            size="lg"
            variant="outline"
            color="#c7260c"
            borderColor="#c7260c"
            width="200px"
            _hover={{ bg: "#ad3b00", color: "white" }} // Add color: "white" here
            borderRadius="0px"
            height="100px"
            onClick={navigateToHome}
            border="0px"
          >
            ΑΡΧΙΚΗ
          </Button>
          <Button
            size="lg"
            variant="outline"
            color="#c7260c"
            borderColor="#c7260c"
            width="200px"
            _hover={{ bg: "#ad3b00", color: "white" }} // Add color: "white" here
            borderRadius="0px"
            height="100px"
            border="0px"
            onClick={navigateToBooks}
          >
            ΒΙΒΛΙΑ
          </Button>
          <Button
            size="lg"
            leftIcon={<MdCall />}
            variant="outline"
            color="#c7260c"
            borderColor="#c7260c"
            _hover={{ bg: "#ad3b00", color: "white" }} // Add color: "white" here
            borderRadius="0px"
            height="100px"
            border="0px"
            onClick={navigateToContact}
          >
            ΕΠΙΚΟΙΝΩΝΙΑ
          </Button>
        </Flex>
      </Center>
      <Center>
        <div style={{ backgroundColor: "#c7260c", height: "2px", width: "100%" }}></div>
      </Center>
    </div>
  );
};

export default NavBar;
