import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AnalyticsLineChart from "./AnalyticsLineChart";
import MainNavBar from "./MainNavBar";
import RecentTransaction from "./RecentTransaction";
import RecentTransactionsGraph from "./RecentTransactionsGraph";
import Reminder from "./Reminder";
import Earnings from "./Earnings";
import RTBoard from "./RTBoard";

export default function Main() {
  return (
    <Box position="relative">
      <Box>
        <MainNavBar />
      </Box>
      <Flex height="1024px">
        <Box width="748.5px" borderRight="1px solid #B7B7B7">
          <Flex
            width="655px"
            height="309px"
            ml="45px"
            mt="174px"
          >
            <AnalyticsLineChart/>
            <Reminder/>
          </Flex>
          <Flex
            width="655px"
            height="383px"
            ml="45px"
            mt="46px"
          >
            <RecentTransaction/>
            <RecentTransactionsGraph/>
          </Flex>
        </Box>
        <Box width="445.5px">
          <Box
            width="292px"
            height="383px"
            ml="68px"
            mt="174px"
          >
            <Earnings/>
          </Box>
          <Box
            width="290px"
            height="292px"
            ml="68px"
            mt="46px"
          >
            <RTBoard/>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
