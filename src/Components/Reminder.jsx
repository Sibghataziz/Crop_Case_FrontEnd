import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import reminder from "../SVG/reminder.svg";

export default function Reminder() {
  return (
    <Box ml="28px" width="209px">
      <Text fontWeight="bold" mb="26px">
        Reminder
      </Text>
      <Box bgColor="#0038FF" borderRadius="15px" width="209px" height="269px">
        <Flex flexDirection="column" pt="20px" alignItems="center">
          <Text
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="14px"
            height="33px"
          >
            Agency Design Kit
          </Text>
          <Box margin="6px 0px">
            <Image src={reminder} />
          </Box>
          <Text
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="14px"
            height="33px"
          >
            Will be published <br /> Nov 25, 2022
          </Text>
          <Box mt='19px'>
            <Button
              border="none"
              height="39px"
              borderRadius="10px"
              width="164px"
              bgColor="white"
              fontWeight="bold"
              fontSize="14px"
            >
              Set as Reminder
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
