import React from 'react'
import { Box, Flex, Text,Spacer, HStack,Link,Heading, VStack,useColorMode, Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton} from "@chakra-ui/react";
import { SunIcon ,MoonIcon,HamburgerIcon} from '@chakra-ui/icons';
import { useState } from "react";
import {AiOutlineMail, AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import '../../styles/nav.css';

export const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const theme=function(){
    return isClicked? <SunIcon boxSize={6}/> : <MoonIcon boxSize={6}/>
  }
  const changingTheme=function(){
    setIsClicked(!isClicked)
    toggleColorMode()
  }
  
  return (
    <div>
      <Box display='flex' 
      pt={{base:'20px', md:'70px'}} 
      px={{base:'30px' , md:'150'}} 
      position='fixed' 
      alignItems='center'
      justifyContent='space-between'
      bg={colorMode==='light'?'rgb(255, 255, 255, 0.7)':'rgb(26, 32, 44, 0.7)'} 
      className='navigation'
      >
          <Box>
              <Heading>LAD<Text as='span' color='#ff0000'>E</Text></Heading>
          </Box>
          <HamburgerIcon onClick={onOpen} ref={btnRef} boxSize={7} display={{lg:'none'}} />
          <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody py={{base:'70px', md:'100px'}} gap='20px' >
                <Link borderBottom='2px' borderColor='#ff0000'href='#project' ><Text fontSize='2xl'>Projects</Text></Link>
                <Link href='#contact' ><Text fontSize='2xl'>Contact</Text></Link>
                <Link><Text fontSize='2xl'>Resume</Text></Link>
                <Link onClick={changingTheme}>
                  <Text fontSize='2xl'>Toggle to {colorMode==='light'?"dark":'light'} mode</Text>
              </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <HStack spacing={{md:'20px', lg:'70px'}} display={{base:'none', lg:'flex'}}>
              <Link href='#project' borderBottom='2px' borderColor='#ff0000'><Text fontSize='2xl'>Projects</Text></Link>
              <Link href='#contact'><Text fontSize='2xl'>Contact</Text></Link>
              <Link><Text fontSize='2xl'>Resume</Text></Link>
              <Link onClick={changingTheme}>
              {theme()}
              </Link>
          </HStack>
      </Box>

      <VStack position='fixed' pt='60vh' pl='3vw' gap='5' display={{base:'none', md:'block'}} >
        <Link className='socialLinks' target="_blank" href='https://www.linkedin.com/in/ololade-akinrinsola/' ><AiFillLinkedin size={ '40'} /></Link>
        <Link className='socialLinks' target="_blank" href='mailto: ololadeakinrinsola@gmail.com'><AiOutlineMail size={'40'}/></Link>
        <Link className='socialLinks' target="_blank" href='https://github.com/lolaakinrinsola' ><AiFillGithub size={'40'}/></Link>
      </VStack>
    </div>
  )
}
