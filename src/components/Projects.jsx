import React from 'react'
import { Card } from './Card'
import { Box,Heading} from "@chakra-ui/react";
import styled from 'styled-components';

const Project=styled.div`
    display:grid;
    justify-content:center;
    width:100vw;
    gap:3em;
    padding:100px 0;
`
export const Projects = () => {
  const projectsDetails=[
    {title:'Little Lemon', githublink:'#', websiteLink:'#'},
    {title:'Fylo', githublink:'#', websiteLink:'#'},
    {title:'Zuri FIRST', githublink:'#', websiteLink:'#'},
    {title:'Metaverse', githublink:'https://github.com/Lolaakinrinsola/metabnb', websiteLink:'#'},
    {title:'portfolio', githublink:'#', websiteLink:'#'}
  ]
  return (
    <Project id='project' >
        <Heading textAlign='center' size='2xl'>Here are some of my works</Heading>
        <Box display='flex' w='100vw' flexWrap='wrap' gap='3em' px='150px' justifyContent='center'>
          {projectsDetails.map((websites)=>(
            <Card 
            project={websites.title} 
            github={websites.githublink}
            website={websites.websiteLink}
            />
          ))}
        </Box>
    </Project>
  )
}
