import React from 'react'
import { Box, Flex, Text,Spacer, HStack,Link,Heading, VStack,useColorMode} from "@chakra-ui/react";
import { SunIcon ,MoonIcon} from '@chakra-ui/icons';
import { useState } from "react";
import {AiFillPhone, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai';

export const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const theme=function(){
    return isClicked? <SunIcon boxSize={6}/> : <MoonIcon boxSize={6}/>
  }
  const changingTheme=function(){
    setIsClicked(!isClicked)
    toggleColorMode()
  }
  const themee = {
    styles: {
      global: (props) => ({
        'html, body': {
          color: props.colorMode === 'isClicked' ? 'white' : 'gray.600',
        },
        a: {
          color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        },
      }),
    },
  }
  return (
    <div>
      <Box display='flex' 
      pt={{md:'90'}} 
      px={{md:'150'}} 
      position='fixed' 
      justifyContent='space-between'
      bg={colorMode==='light'?'rgb(255, 255, 255, 0.7)':'rgb(26, 32, 44, 0.7)'} 
      gap='400'>
          <Box>
              <Heading>LAD<Text as='span' color='#ff0000'>E</Text></Heading>
          </Box>
          <Spacer />
          <HStack spacing='70px' display={{base:'none', md:'flex'}}>
              <Link borderBottom='2px' borderColor='#ff0000'><Text fontSize='2xl'>Projects</Text></Link>
              <Link><Text fontSize='2xl'>Hire me</Text></Link>
              <Link><Text fontSize='2xl'>Resume</Text></Link>
              <Link onClick={changingTheme}>
              {theme()}
              </Link>
          </HStack>
      </Box>

      <VStack position='fixed' pt='60vh' pl='3vw' gap='5'>
        <Link><AiFillPhone size={'40'}/></Link>
        <Link><AiFillTwitterCircle size={'40'}/></Link>
        <Link><AiFillGithub size={'40'}/></Link>
      </VStack>
    </div>
  )
}
