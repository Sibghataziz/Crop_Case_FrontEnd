import { Box, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import React from "react";
import recentCard from "../SVG/recentCard.svg";

export default function RecentCard({ name, price, date }) {
  return (
    <Flex height="55px" width="100%">
      <Box>
        <Image src={recentCard} borderRadius="10px" />
      </Box>
      <Flex alignItems="center" ml="12px" width="205px">
        <Text>
          <span style={{ fontSize: "14px", fontWeight: "700" }}>{name}</span>
          <br />
          <span style={{ fontSize: "10px", color: "#BDBDBD" }}>{date}</span>
        </Text>
        <Spacer />
        <Text fontSize="16px" fontWeight="700">
          $ {price}
        </Text>
      </Flex>
    </Flex>
  );
}
