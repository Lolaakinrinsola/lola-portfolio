import React from 'react'
import { Box, Flex, Text,Spacer, HStack,Link,Heading, VStack,useColorMode, Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton} from "@chakra-ui/react";
import { SunIcon ,MoonIcon,HamburgerIcon} from '@chakra-ui/icons';
import { useState } from "react";
import {AiFillPhone, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai';

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
      pt={{base:'20', md:'70'}} 
      px={{base:'30px' , md:'150'}} 
      position='fixed' 
      alignItems='center'
      justifyContent='space-between'
      bg={colorMode==='light'?'rgb(255, 255, 255, 0.7)':'rgb(26, 32, 44, 0.7)'} 
      gap={{base:'120px', md:'200px', lg:'300px'}}
      >
          <Box>
              <Heading>LAD<Text as='span' color='#ff0000'>E</Text></Heading>
          </Box>
          <Spacer />
          <HamburgerIcon onClick={onOpen} ref={btnRef} boxSize={7} display={{md:'none'}} />
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
                <Link borderBottom='2px' borderColor='#ff0000'><Text fontSize='2xl'>Projects</Text></Link>
                <Link ><Text fontSize='2xl'>Contact</Text></Link>
                <Link><Text fontSize='2xl'>Resume</Text></Link>
                <Link onClick={changingTheme}>
                  <Text fontSize='2xl'>Toggle to {colorMode==='light'?"dark":'light'} mode</Text>
              </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <HStack spacing={{md:'20px', lg:'70px'}} display={{base:'none', md:'flex'}}>
              <Link borderBottom='2px' borderColor='#ff0000'><Text fontSize='2xl'>Projects</Text></Link>
              <Link><Text fontSize='2xl'>Hire me</Text></Link>
              <Link><Text fontSize='2xl'>Resume</Text></Link>
              <Link onClick={changingTheme}>
              {theme()}
              </Link>
          </HStack>
      </Box>

      <VStack position='fixed' pt='60vh' pl='3vw' gap='5' display={{base:'none', md:'block'}} >
        <Link><AiFillPhone size={ '40'}/></Link>
        <Link><AiFillTwitterCircle size={'40'}/></Link>
        <Link><AiFillGithub size={'40'}/></Link>
      </VStack>
    </div>
  )
}
