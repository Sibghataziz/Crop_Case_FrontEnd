import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Image, Flex } from "@chakra-ui/react";
import EarnChart from "./EarnChart";
import { baseUrl } from "../App";

export default function RecentTransactionsGraph() {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0);

  const getData =async () => {
    try {
      const res = await fetch(`${baseUrl}/barChart`)
      const data = await res.json()
      let newtotal = 0;
      data.forEach(({ pre,post }) => {
        newtotal += post-pre;
      });
      setTotal(Math.abs(newtotal));
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Box width="289px" height="382px">
      <Text fontWeight="bold" mb="26px">
        Earnings
      </Text>
      <Box
        width="289px"
        height="344px"
        boxShadow="0px 4px 50px rgba(0, 0, 0, 0.06)"
        borderRadius="10px"
      >
        <Flex flexDirection="column" alignItems="center">
          <Text mt="32px" fontSize="10px" color="#A5A5A5">
            Saved this month
          </Text>
          <Text fontSize="48px" fontWeight="700">
            $ {total}
          </Text>
          <Text fontSize="10px" color="#A5A5A5">
            Your payment will be <br /> updated by the system
          </Text>
          <Box mt="22px" ml="-20px">
            <EarnChart data={data} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
