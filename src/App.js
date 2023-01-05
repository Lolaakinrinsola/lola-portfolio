import { Routes, Route } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Nav } from "./components/layout/Nav";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <Header/>
      <Projects/>
      <Resume/>
    </ChakraProvider>
  );
}

export default App;
