import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import handshake from "../SVG/handshake.svg";
import searchIcon from "../SVG/searchIcon.svg";
import email from "../SVG/email.svg";
import hug from "../SVG/hug.svg";
import account from "../SVG/account.svg";
import { GoMail } from "react-icons/go";
import { BsInbox } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function MainNavBar() {
  return (
    <Flex
      position="absolute"
      width="1052px"
      height="54px"
      left="45px"
      top="57px"
    >
      <Flex width="672px">
        <Text
          position="absolute"
          width="213px"
          height="31px"
          top="11.5px"
          fontSize="34px"
          fontWeight="500"
          alignSelf="center"
        >
          Hello, John <Image src={handshake} width="30px" height="30px" />
        </Text>
        <Spacer />
        <Box
          width="339px"
          bgColor="#F5F5F5"
          position="relative"
          borderRadius="15px"
        >
          <Button border="none" position="absolute" top="17px" left="17px">
            <Image src={searchIcon} width="20px" height="20px" />
          </Button>
          <Input
            border="none"
            position="absolute"
            top="10px"
            left="37px"
            height="34px"
            placeholder="Search"
            fontWeight="bold"
            pl="8px"
            width="292px"
            bgColor="inherit"
          ></Input>
        </Box>
      </Flex>
      <Spacer />
      <Flex
        alignItems="center"
        width="148px"
        height="38px"
        position="relative"
        top="8px"
      >
        <Box>
          <Button border='none' bgColor="white">
            <GoMail size={42}/>
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button border='none' bgColor="white">
            <BsInbox size={42}/>
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button border='none' bgColor="white">
            <CgProfile size={42}/>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
