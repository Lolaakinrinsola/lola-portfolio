import React from 'react'
import { Card } from './Card'
import { Box,Heading} from "@chakra-ui/react";
import styled from 'styled-components';
import meta from './Images/metabnb.png'

const Project=styled.div`
    display:grid;
    justify-content:center;
    width:100vw;
    gap:3em;
    padding:100px 0;
`
export const Projects = () => {
  const projectsDetails=[

    {title:'Tech1M Juniors', githublink:'https://github.com/Temyturpe/Tech1m-group3-project', websiteLink:'https://tech1m-group3-project.vercel.app/', about:'Tech1M Juniors is a web application designed for children to learn various tech skills.', tech:'React, Firebase, JavaScript, TailWind',key:'1'} ,
    {title:'Little Lemon', githublink:'https://github.com/Lolaakinrinsola/little-lemon', websiteLink:'#', about:'Little lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.',tech:'React, HTML, JavaScript, SCSS',key:'2'},
    {title:'Metaverse', githublink:'https://github.com/Lolaakinrinsola/metabnb', websiteLink:'https://metabnbzuri.vercel.app', image:'lola-portfolio/src/components/Images/metabnb.png', about:'Metaverse provide you access to luxury and affordable houses in the metaverse',tech:'React, SCSS, JavaScript, HTML',key:'3'},
    {title:'Fylo', githublink:'https://github.com/Lolaakinrinsola/fylo-landing-page', websiteLink:'https://lolaakinrinsola.github.io/fylo-landing-page/', about:'A landing page for a company', tech:'React, SCSS, JavaScript, HTML',key:'4'},
    {title:'Zuri FIRST', githublink:'#', websiteLink:'https://secondtaskhng.vercel.app', about:'A biodata page for zuri internship and validates form',tech:'React, SCSS, JavaScript, HTML',key:'5'},
    {title:'My Portfolio', githublink:'https://github.com/Lolaakinrinsola/lola-portfolio', websiteLink:'https://lola-portfolio.vercel.app/',tech:'React, Chakra-UI, JavaScript, HTML',key:'6'}
  ]
  return (
    <Project id='project' >
        <Heading textAlign='center' size='2xl'>Here are some of my works</Heading>
        <Box display='flex' w='100vw' flexWrap='wrap' gap='3em' px='150px' justifyContent='center'>
          {projectsDetails.map((websites)=>(
            <Card key={websites.key}
            project={websites.title} 
            github={websites.githublink}
            website={websites.websiteLink}
            image={websites.image}
            about={websites.about}
            tech={websites.tech}
            />
          ))}
        </Box>
    </Project>
  )
}
