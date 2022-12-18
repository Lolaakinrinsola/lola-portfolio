import { Routes, Route } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Nav } from "./components/layout/Nav";
import { Header } from "./components/Header";
function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <Header/>
    </ChakraProvider>
  );
}

export default App;
