import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Image, Flex } from "@chakra-ui/react";
import LineChart from "./LineChart";
import { baseUrl } from "../App";

const chart = [
  {
    name: "Day",
    active: false,
  },
  {
    name: "Week",
    active: false,
  },
  {
    name: "Month",
    active: true,
  },
  {
    name: "Year",
    active: false,
  },
];

export default function RecentTransactionsGraph() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const getChart = async () => {
    try {
      const res = await fetch(`${baseUrl}/lineChart`);
      const data = await res.json();
      let newtotal = 0;
      data.forEach(({ income }) => {
        newtotal += income;
      });
      setTotal(newtotal);
      setData(() => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChart();
  }, []);

  return (
    <Box width="289px" height="382px" ml="28px">
      <Text fontWeight="bold" mb="26px">
        Recent Transactions
      </Text>
      <Box
        width="289px"
        height="344px"
        boxShadow="0px 4px 50px rgba(0, 0, 0, 0.06)"
        borderRadius="10px"
      >
        <Flex flexDirection="column" alignItems="center">
          <Text mt="49px" fontSize="10px" color="#A5A5A5">
            Account Reached
          </Text>
          <Text fontSize="48px" fontWeight="700">
           $ {total}
          </Text>
          <Flex>
            {chart.map(({ name, active }, index) => (
              <Text
                key={index}
                fontSize="10px"
                color={active ? "black" : "#A5A5A5"}
                mr="19px"
                fontWeight="600"
              >
                {name}
              </Text>
            ))}
          </Flex>
          <Box ml="27px">
            <LineChart width={258} height={182} data={data} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
