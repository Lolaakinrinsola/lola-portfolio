import React from 'react'
import { Box, Center, Image, Flex, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

export const Card = (props) => {
  return (
    <Box width={{base:'100%', md:'60%'}} display={{md:'flex', base:'grid'}}
     p={{base:'10', md:'150'}} 
     bg='blue'
     borderRadius='20'
     >
        <Image src={props.image} w='100'/>
        <Box gap='50'>
            <Heading>Project</Heading>
            <Link>Visit the website</Link>
            <Box display='flex' gap='30'>
                <Link><AiFillGithub/></Link>
                <Link> <AiOutlineLink/></Link>
            </Box>
            <Text>{props.tech}</Text>
        </Box>
    </Box>
  )
}
