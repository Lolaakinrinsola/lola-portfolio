import React from 'react'
import { Card } from './Card'
import { Box, Center, Image, Flex,Container, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import styled from 'styled-components';

const Project=styled.div`
    display:grid;
    justify-content:center;
    width:100vw;
    gap:3em;
    padding:100px 0;
`
export const Projects = () => {
  return (
    <Project id='project' >
        <Heading textAlign='center' size='2xl'>Here are some of my works</Heading>
        <Box display='flex' w='100vw' flexWrap='wrap' gap='3em' px='150px' justifyContent='center'>
          <Card/>
          <Card/>        
          <Card/>        
          <Card/>        
          <Card/>        
          <Card/>        

        </Box>
    </Project>
  )
}
