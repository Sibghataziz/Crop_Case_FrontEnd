import React from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";
import users from "../SVG/user.svg";
import transferIcons from "../SVG/transferIcon.svg";
import transferPlus from "../SVG/transferPlus.svg";

const transfers = [
  {
    icon: transferIcons,
    ml: "0px",
  },
  {
    icon: transferIcons,
    ml: "-6px",
  },
  {
    icon: transferIcons,
    ml: "-6px",
  },
  {
    icon: transferIcons,
    ml: "-6px",
  },
  {
    icon: transferIcons,
    ml: "-6px",
  },
  {
    icon: transferPlus,
    ml: "-6px",
  },
];

export default function RTBoard() {
  return (
    <Box width="292px" height="382px">
      <Text fontWeight="bold" mb="26px">
        Recent Transactions
      </Text>
      <Box
        width="289px"
        height="260px"
        boxShadow="0px 4px 50px rgba(0, 0, 0, 0.06)"
        borderRadius="10px"
      >
        <Box pl="22px" pt="26px" pr="22px">
          <Flex mb="23px" alignItems="center">
            <Box>
              <Image src={users} />
            </Box>
            <Text fontSize="10px" color="#A5A5A5" ml="6px">
              Transfer to your team
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Text fontSize="40px" color="#ACACAC" fontWeight="700">
              $<span style={{ color: "black" }}>450</span>
            </Text>
            <Spacer />
            <Box>
              <Button
                border="none"
                bgColor="#000AFF"
                color="white"
                borderRadius="10px"
                width="113px"
                height="39px"
              >
                Transfer
              </Button>
            </Box>
          </Flex>
          <Flex mt="43px" borderTop="2px solid #E6E6E6" pt="23px">
            {transfers.map(({ icon, ml },index) => (
              <Box key={index}>
                <Image src={icon} ml={ml} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
