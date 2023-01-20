import React from 'react'
import { Box, Center, Image, Flex,useColorMode, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

export const Card = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width={{base:'80%', md:'30%'}} display={{md:'flex', base:'grid'}}
     p={{base:'10', md:'150'}} 
     bg={colorMode==='light'?'rgb(255, 255, 255)':'rgb(26, 32, 44)'} 
     borderRadius='20'
     borderWidth='1px'
     boxShadow='3px 2px 10px #ff0000'
     >
        <Image src={props.image} w='fit-content'/>
        <Box gap='2em'>
            <Heading>Project</Heading>
            <Link>Visit the website</Link>
            <Box display='flex' gap='5'>
                <Link><AiFillGithub size={'30'}/></Link>
                <Link> <AiOutlineLink size={'30'}/></Link>
            </Box>
            <Text>{props.tech}</Text>
        </Box>
    </Box>
  )
}
