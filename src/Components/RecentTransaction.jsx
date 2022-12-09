import { Box, Text, VStack, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../App';
import RecentCard from './RecentCard'


export default function RecentTransaction() {
  const [transactions, setTransactions] = useState([]);

  const getTransaction = async () => {
    try {
      const res = await fetch(`${baseUrl}/recent`)
      const data = await res.json()
      setTransactions(data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <Box width="338px" height="382px">
      <Text fontWeight="bold" mb="26px">
        Recent Transactions
      </Text>
      <Box  width="338px" height="344px" boxShadow= "0px 4px 50px rgba(0, 0, 0, 0.06)" borderRadius= "10px">
      <VStack padding="35px 33px" spacing='18px'>
        {
            transactions.map((ele,index)=><RecentCard key={index} {...ele}/>
            )
        }
        </VStack>
      </Box>
    </Box>
  )
}
