import { Container, Heading, Text,Box,Flex, Link } from '@chakra-ui/react'
import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {AiFillPhone, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai';

export const Contact = () => {
  return (
    <Box h='100vh' alignContent='center' display='grid' justifyItems='center' gap='30'>
        <Heading align='center' size='3xl'>Contact me</Heading>
        <Text>You can reach out to me on email and let's collaborate together</Text>
        <Flex gap='30px'>
            <Link><MdOutlineEmail/></Link>
            <Link><AiFillPhone /></Link>
            <Link><AiFillTwitterCircle /></Link>
            <Link><AiFillGithub /></Link>
        </Flex>
    </Box>
  )
}
