import { Heading, Container } from '@chakra-ui/react'
import React from 'react';
import resume from "./assets/Akinrinsola's CV.pdf";
import { Document ,Page} from 'react-pdf/dist/esm/entry.webpack';


export const Resume = () => {
  return (
    <div>
        <Heading textalign='center'>Resume</Heading>
        <Container maxW='container.sm'>
            <Document file={resume}
            style={{width:'100vw'}}
            >
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            </Document>
        </Container>
    </div>
  )
}
