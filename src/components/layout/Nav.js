import React from 'react'
import { Box, Flex, Text,Spacer, HStack,Link} from "@chakra-ui/react";
import { SunIcon } from '@chakra-ui/icons'
export const Nav = () => {
  return (
    <Flex pt='100' pr='150' pl='150'>
        <Box>
            <Text>LADE</Text>
        </Box>
        <Spacer/>
        <HStack gap='20px'>
            <Link>Projects</Link>
            <Link>Hire me</Link>
            <Link>Resume</Link>
            <SunIcon boxSize={6}/>
        </HStack>
    </Flex>
  )
}
