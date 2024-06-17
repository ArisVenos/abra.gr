import React from "react";
import { Flex, Button, Image, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdBuild, MdCall } from "react-icons/md";
import logo from "./images/logo.png";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "#4692f0" }}>
      <Center>
        <Image src={logo} maxW="200px" />
      </Center>
      <Center style={{ backgroundColor: "white" }}>
        <Flex style={{ backgroundColor: "white" }}>
          <Link to="/" style={{ textDecoration: "none" }}> {/* Use Link component */}
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
            >
              ΑΡΧΙΚΗ
            </Button>
          </Link>
          <Link to="/Sets" style={{ textDecoration: "none" }}> {/* Use Link component */}
            <Button
              size="lg"
              variant="outline"
              color="#c7260c"
              borderColor="#c7260c"
              width="200px"
              _hover={{ bg: "#ad3b00", color: "white" }}
              borderRadius="0px"
              height="100px"
              border="0px"
            >
              ΒΙΒΛΙΑ
            </Button>
          </Link>
          <Link to="/Contact" style={{ textDecoration: "none" }}> {/* Use Link component */}
            <Button
              size="lg"
              leftIcon={<MdCall />}
              variant="outline"
              color="#c7260c"
              borderColor="#c7260c"
              _hover={{ bg: "#ad3b00", color: "white" }}
              borderRadius="0px"
              height="100px"
              border="0px"
            >
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Button>
          </Link>
        </Flex>
      </Center>
      <Center>
        <div style={{ backgroundColor: "#c7260c", height: "2px", width: "100%" }}></div>
      </Center>
    </div>
  );
};

export default NavBar;
