import {
  Box,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function NavItem({ icon, name, active }) {
  return (
    <HStack width="100%">
      <Box mr="18px">
        <Image src={icon} />
      </Box>
      <Box>
        <Text
          color={active? "black" : "#9E9E9E"}
          fontStyle="normal"
          fontWeight="bold"
          fontSize="15px"
        >
          {name}
        </Text>
      </Box>
    </HStack>
  );
}
