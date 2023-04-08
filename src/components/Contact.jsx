import { Container, Heading, Text,Box,Flex, Link } from '@chakra-ui/react'
import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {AiFillPhone, AiFillGithub,AiFillLinkedin} from 'react-icons/ai';

export const Contact = () => {
  return (
    <Box id='contact' h='100vh' px={{base:'30px', md:'0' }} alignContent='center' w={{base:'fit-content', md:''}} display='grid' justifyItems='center' justifyContent='center' gap='30' m='auto' >
        <Heading align='center' size='3xl'>Contact me</Heading>
        <Text fontSize='20px' align='center' >You can reach out to me on <Link color='#ff0000'>email</Link> and let's collaborate together</Text>
        <Flex gap='30px'>
            <Link target="_blank" href='mailto: ololadeakinrinsola@gmail.com'><MdOutlineEmail size={'30'} /></Link>
            <Link target="_blank" href='https://www.linkedin.com/in/ololade-akinrinsola/'><AiFillPhone size={'30'} /></Link>
            <Link target="_blank" href='https://www.linkedin.com/in/ololade-akinrinsola/'><AiFillLinkedin size={'30'} /></Link>
            <Link target="_blank" href='https://github.com/lolaakinrinsola'><AiFillGithub size={'30'} /></Link>
        </Flex>
    </Box>
  )
}
