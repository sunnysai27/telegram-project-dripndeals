import React, { useState , useEffect } from 'react'
import {io} from "socket.io-client"
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ProductDetail from './Components/ProductDetail';

const socket = io("http://localhost:5000");

function App() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    
    fetchDeals();
    // Real-time updates from socket
    socket.on("new_message", (msg) => {
      setDeals(prev => [msg, ...prev]); // Prepend new message
    });

    return () => socket.off("new_message");
  }, []);

  const fetchDeals = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}deals`);
      const json =  await response.json();
      if(json.success) {
        setDeals(json.messages);
      }else{
        console.log(json.error);
      }
      
  }



  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body deals={deals} />} />
        <Route path='/about' element={<About />}/>
        <Route path="/deal/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;