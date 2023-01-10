import React from 'react'
import { Box, Flex, Text,Spacer, HStack,Link,Heading, VStack} from "@chakra-ui/react";
import { SunIcon } from '@chakra-ui/icons'
export const Nav = () => {
  return (
    <Flex pt={{md:'100'}} px={{md:'150'}}>
        <Box>
            <Heading>LAD<Text as='span' color='#ff0000'>E</Text></Heading>
        </Box>
        <Spacer/>
        
        <HStack spacing='70px' display={{base:'none', md:'flex'}}>
            <Link borderBottom='2px' borderColor='#ff0000'><Text fontSize='2xl'>Projects</Text></Link>
            <Link><Text fontSize='2xl'>Hire me</Text></Link>
            <Link><Text fontSize='2xl'>Resume</Text></Link>
            <SunIcon boxSize={6}/>
        </HStack>
    </Flex>
  )
}
