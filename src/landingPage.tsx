import { useState } from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import backgroungImage from "./assets/bgNew.svg";

export default function LandingPage(props: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Flex
      id="land"
      flexDir="column"
      gap="20"
      h="100vh"
      w="auto"
      // bgImg={backgroungImage}
      // bgSize="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        // h="200px"
        // w="550px"
        // borderRadius="20px"
        // bg="#fff"
        // boxShadow=" 0px 2px 4px #D03B6D, 0px 0px 4px #615b5d"
        p="5"
      >
        <Heading fontSize={100} alignItems="center" textAlign="justify">
          راوي
        </Heading>
        <Text fontSize={70} mt="2" textAlign="center">
          مؤلف القصص الآلي
        </Text>
      </Flex>

      <Flex
        color={"#fff"}
        borderRadius="50%"
        h="100px"
        w="100px"
        fontSize="32px"
        justifyContent="center"
        alignItems="center"
        bg="#1ABF00"
        cursor="pointer"
        onClick={() => {
          document
            .getElementById("userForm")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ابدأ
      </Flex>
    </Flex>
  );
}
