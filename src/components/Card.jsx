import React from 'react'
import { Box, Image, Flex,useColorMode, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

export const Card = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  
  return (
    <Box width={{base:'fit-content', md:'30%'}} max-width={{md:'30rem'}} display={{md:'flex', base:'grid'}}
     p={{base:'10', md:'150'}} 
     bg={colorMode==='light'?'rgb(255, 255, 255)':'rgb(26, 32, 44)'} 
     borderRadius='20'
     borderWidth='1px'
     boxShadow='3px 2px 10px #ff0000'
     >
        <Image src={props.image} w='fit-content'/>
        <Box gap='2em'>
            <Heading>{props.project}</Heading>
            <Link>Visit the website</Link>
            <Box display='flex' gap='5'>
                <Link href={props.github}><AiFillGithub size={'30'}/></Link>
                <Link href={props.website}> <AiOutlineLink size={'30'}/></Link>
            </Box>
            <Text>{props.tech}</Text>
        </Box>
    </Box>
  )
}
