import React from 'react'
import { Box, Center, Image, Flex, Text,Spacer, HStack,Heading, Link,Button} from "@chakra-ui/react";
import { MdWavingHand } from 'react-icons/md';
import logo from './Images/dplogo.png'

export const Header = () => {
  return (
    <Box px='150' pt='30' align='center' gap='100' >
        <Box h='70vh' display='grid' alignContent='center'gap='20'>
          <Heading fontSize='6em' textAlign='left'>Creating <Text as='span' color='#ff0000'>beautiful</Text> and <Text as='span' color='#ff0000'>functional</Text> websites and applications, one pixel at a time</Heading>
          <Flex gap='10'>
            <Button bg='#ff0000' color='white'size='lg'>Contact me</Button>
            <Button colorScheme='blue'border='2px'
  borderColor='#ff0000' variant='outline' color='#ff0000' size='lg'>Download resume</Button>
          </Flex>
        </Box>
        <Box h='100vh' display='flex' flexDirection={{base :'column', md:'row'}} alignItems='center'>
          <Box  w='100'>
              <Heading display='flex' size='4xl'>Hi <MdWavingHand color='blue'/>, I'm Ololade </Heading>
              <Text pt='10' fontSize='2xl' >I am a front end developer from Lagos, Nigeria that loves to builds things on the internet.
                  I have experience in building complex websites using modern technologies like React, Javascript and CSS.
                  Let's have a <Link color='blue' href='mailto: ololadeakinrinsola@gmail.com'>chat</Link> !
              </Text>
          </Box>
          <Spacer/>
          <Image src={logo}  boxSize='380px' h='300px' />
        </Box>
    </Box>
  )
}
