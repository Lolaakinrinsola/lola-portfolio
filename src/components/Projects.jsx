import React from 'react'
import { Card } from './Card'
import { Box, Center, Image, Flex,Container, Text,Spacer, HStack,Heading, Link} from "@chakra-ui/react";
import styled from 'styled-components';

const Project=styled.div`
    display:grid;
    justify-content:center;
    width:100vw;
    border:solid;
    gap:3em;
    padding:100px 0
`
export const Projects = () => {
  return (
    <Project display='grid' m='auto'  w='100vw' border='solid'>
        <Heading>Here are some of my works</Heading>
        <Card/>
        <Card/>        
    </Project>
  )
}
