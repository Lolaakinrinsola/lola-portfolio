import React from 'react'
import { Box, Image, Flex,useColorMode, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import meta from './Images/metabnb.png';

export const Card = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  
  return (
    <Box width={{base:'fit-content'}} maxW='21em' display='grid'
     
     bg={colorMode==='light'?'rgb(255, 255, 255)':'rgb(26, 32, 44)'} 
     borderRadius='20'
     borderWidth='1px'
     boxShadow='3px 2px 10px #ff0000'
     >
        <Image src={meta} w='100%' borderRadius='20' marginTop='.6'/>
        <Box p='10' >
            <Heading marginBottom='3'>{props.project}</Heading>
            <Box display='flex' gap='5'>
                <Link href={props.github}><AiFillGithub size={'30'}/></Link>
                <Link href={props.website}> <AiOutlineLink size={'30'}/></Link>
            </Box>
            <Text marginTop='2'>{props.about} </Text>
            <Text fontSize='xs' color='grey'>{props.tech}</Text>
        </Box>
    </Box>
  )
}
