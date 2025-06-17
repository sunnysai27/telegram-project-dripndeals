import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Left: Hamburger on small screens */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Center: Logo */}
      <h1 className="text-lg font-bold mx-auto lg:mx-0">DripnDeals</h1>

      {/* Right: Search Icon */}
      <div>
        🔍︎
      </div>

      {/* Nav Items: visible on large screens */}
      <nav className="hidden lg:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link to="/" className="text-gray-700 hover:text-black">Shop</Link>
        <Link to="/" className="text-gray-700 hover:text-black">Deals</Link>
        <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
        <Link to="/" className="text-gray-700 hover:text-black">Contact</Link>
      </nav>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <div className="absolute top-16 left-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 lg:hidden">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Shop</a>
          <a href="#" className="text-gray-700">Deals</a>
          <a href="#" className="text-gray-700">Contact</a>
        </div>
      )}
      
    </header>
  );
};

export default Header;