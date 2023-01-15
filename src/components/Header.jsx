import React from 'react'
import { Box, Center, Image, Flex, Text,Spacer, HStack,Heading, Link,Button} from "@chakra-ui/react";
import { MdWavingHand } from 'react-icons/md';
import { useState } from "react";
import logo from './Images/dplogo.png';
import resume from "./assets/Akinrinsola's CV.pdf";

export const Header = () => {
  return (
    <Box px='150' pt='30' align='center' gap='100' >
        <Box h='100vh' display='grid' alignContent='center'gap='20'>
          <Heading fontSize='6em' textAlign='left'>Creating <Text as='span' color='#ff0000'>beautiful</Text> and <Text as='span' color='#ff0000'>functional</Text> websites and applications, one pixel at a time</Heading>
          <Flex gap='10'>
            <Button bg='#ff0000' color='white'size='lg' colorScheme='orange'>Contact me</Button>
            <Link href={resume} target="_blank">
              <Button colorScheme='orange'border='2px'
              borderColor='#ff0000' variant='outline' color='#ff0000' size='lg' >Download resume</Button>
            </Link>
          </Flex>
        </Box>
        <Box h='100vh' display='flex' flexDirection={{base :'column', md:'row'}} alignItems='center'>
          <Image src={logo}  boxSize='300px'  borderRadius='full' />
          <Spacer/>
          <Box  w='60vw' spacing='20' justifyContent='start'>
              <Heading display='flex' size='4xl'>Hi <MdWavingHand color='#ff0000'/>, I'm Ololade </Heading>
              <Text pt='10' fontSize='4xl' textAlign='left'>I am a front end developer from Lagos, Nigeria that loves to builds things on the internet.
                  I have experience in building complex websites using modern technologies like React, Javascript and CSS.
                  Let's have a <Link color='#ff0000' href='mailto: ololadeakinrinsola@gmail.com'>chat</Link> !
              </Text>
              <Flex pt='15'>

                  <Link href={resume} target="_blank">
                    <Button 
                    colorScheme='orange'
                    border='2px'
                    borderColor='#ff0000' 
                    variant='outline' 
                    color='#ff0000' 
                    size='lg'>
                    Download resume
                    </Button>
                  </Link>
              </Flex>
          </Box>
        </Box>
    </Box>
  )
}
