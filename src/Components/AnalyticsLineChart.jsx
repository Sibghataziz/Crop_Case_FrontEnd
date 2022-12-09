import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../App";
import LineChart from "./LineChart";



export default function AnalyticsLineChart() {
  const [data, setData] = useState([])

  const getData =async () => {
    try {
      const res = await fetch(`${baseUrl}/lineChart`)
      const data = await res.json()
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Box width='418px'>
      <Text fontWeight="bold" mb="26px">
        Analytics
      </Text>

      <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" pt='25px' pl='32px' borderRadius='10px' height='245px'>
        <Flex width="348px" height="18px" mb='26px'>
          <Button
            width="73px"
            bgColor="#525252"
            fontSize="10px"
            textAlign="center"
            color="white"
            fontWeight="bold"
            borderRadius="25px"
            border="none"
          >
            Income &#8595;
          </Button>
          <Spacer />
          <Flex width="112px" alignItems="center">
            <Text
              width="48px"
              fontSize="10px"
              textAlign="center"
              color="#B1B1B1"
            >
              Sort By :{" "}
            </Text>
            <Button
              width="64px"
              bgColor="white"
              fontSize="10px"
              textAlign="center"
              color="black"
              fontWeight="bold"
              borderRadius="25px"
              border="none"
              height="18px"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              Month &#8595;
            </Button>
          </Flex>
        </Flex>
        <LineChart Yaxis={true} width={358} height={182} data={data}/>
      </Box>
    </Box>
  );
}
