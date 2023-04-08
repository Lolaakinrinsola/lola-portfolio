import { Routes, Route } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Nav } from "./components/layout/Nav";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import colorTheme from './styles/colorTheme'
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <Header/>
      <Projects/>
      <Contact/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
