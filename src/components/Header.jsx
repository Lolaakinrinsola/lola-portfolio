import React from 'react'
import { Box, Center, Image, Flex, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import { MdWavingHand } from 'react-icons/md';
import logo from './Images/dplogo.png'

export const Header = () => {
  return (
    <Flex px='150' pt='30' align='center' h='60vh' gap='100'>
        <Box>
            <Heading display='flex' size='3xl'>Hi <MdWavingHand color='blue'/>, I'm Ololade </Heading>
            <Text pt='10' size='3xl'>I am a front end developer from Lagos, Nigeria that loves to builds things on the internet.
                I have experience in building complex websites using modern technologies like React, Javascript and CSS.
                Let's have a <Link color='blue' href='mailto: ololadeakinrinsola@gmail.com'>chat</Link> !
            </Text>
        </Box>
        <Spacer/>
        <Image src={logo}  boxSize='380px' h='500px' mt='40'/>
    </Flex>
  )
}
