import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between items-center p-4'>
      <div className='w-20 h-20'>
        <img className='object-contain w-full h-full' src="/jnc.svg" alt="" />
      </div>
      
      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-10 p-2 items-center'>
        <div>About</div>
        <div>Features</div>
        <div>Certifications</div>
        <button className='bg-primary-btn py-2 text-white rounded-sm px-4 text-sm'>Contact us</button>
      </div>
      
      {/* Mobile Hamburger Icon */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='p-2'>
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-200 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col h-full p-6'>
          <div className='flex justify-end p-4'>
            <button onClick={toggleMenu} className='p-2'>
              <X size={24} />
            </button>
          </div>
          
          <div className='flex flex-col items-center justify-center gap-8 flex-grow'>
            <div className='text-xl font-medium'>About</div>
            <div className='text-xl font-medium'>Features</div>
            <div className='text-xl font-medium'>Certifications</div>
            <button className='bg-primary-btn py-2 text-white rounded-sm px-4 text-lg w-full max-w-xs'>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;