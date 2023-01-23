import React from 'react'
import { Box, Image, Flex, Text,Spacer,ScaleFade, Heading, Link,Button} from "@chakra-ui/react";
import { MdWavingHand } from 'react-icons/md';
import logo from './Images/dplogo.png';
import resume from "./assets/Akinrinsola's CV.pdf";
import '../styles/header.css';

export const Header = () => {
  return (
      <Box px={{base:'40px', md:'150px'}}  pt={{base:'30px', md:'70px'}} align='center' gap='100' >
          <Box justifyContent='center' className='header' h={{base:'calc(100vh + 30px)', md:'calc(100vh + 30px)'}} w={{base:'fit-content', md:'100vw - 150px'}} display='grid' alignContent='center'>
            <Text align='left' fontFamily='Allura' fontSize={{base:'1em',md:'2em'}} mb='0' > &lt;front end developer /&gt; </Text>
            <Heading mt='0' fontSize={{base:'3em', md:'4em', lg:'6em'}} w={{lg:'95%'}} textAlign='left'>Creating <Text as='span' color='#ff0000'>beautiful</Text> and <Text as='span' color='#ff0000'>functional</Text> websites and applications, one pixel at a time</Heading>
            <Flex gap={{base:'5',md:'10'}}  flexWrap='wrap' mt='15px' >
              <Button w={{base:'100%', md:'fit-content'}} bg='#ff0000' color='white'size='lg' colorScheme='orange'>Contact me</Button>
              <Link href={resume} target="_blank" 
                w={{base:'100%', md:'fit-content'}}
              >
                <Button colorScheme='orange'border='2px'
                w={{base:'100%', md:'fit-content'}}
                borderColor='#ff0000' variant='outline' color='#ff0000' size='lg' >Download resume</Button>
              </Link>
            </Flex>
          </Box>
          <Box h='100vh' display={{base:'grid', lg:'flex'}} justifyContent='center' alignItems='center' margin='auto'  >
              <Image src={logo} mt={{md:'100px', lg:'none' }} boxSize={{base:'200px', md:'300px', lg:'300px'}}  borderRadius='full' m={{base:'auto',lg:'none' }} alignItems='center' />
            
            <Spacer/>
            <Box  w={{base:'fit-content', lg:'60vw'}} mb='40' spacing='20' justifyContent='start' >
                <Heading display='flex'  size={{base:'2xl', md:'3xl', lg:'4xl'}}>Hi <MdWavingHand color='#ff0000' as='span'/>, I'm Ololade </Heading>
                <Text pt='10' fontSize={{base:'2xl', md:'2xl', lg:'4xl'}} textAlign={{base:'left',lg:'left'}}>I am a front end developer from Lagos, Nigeria that loves to builds things on the internet.
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
