import React from 'react';
import {ToastContainer} from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LiveDealTicker from './Components/LiveDealTicker';
import Footer from './Components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';


const App = () => {



  return (
    // <div className="px-4 lg:mx-10 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]">
    <div className="bg-gray-100 font-sans" >
      <ToastContainer />
      <LiveDealTicker />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/deals/:id' element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
