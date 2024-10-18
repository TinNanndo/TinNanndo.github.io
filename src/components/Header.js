import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

return(
  <>
    <nav className="bg-customOrange border-b-8 border-customYellow rounded-t-md flex flex-col md:flex-row items-center justify-between md:justify-start">
      <div className='flex items-center justify-between w-full md:w-auto'>
        <div className='text-4xl p-4 text-customWhite hover:bg-customYellow rounded-tl-md'>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <div className='md:hidden text-4xl p-4 text-customWhite' onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>

      <motion.div
  initial={{ maxHeight: 0 }}
  animate={{ maxHeight: menuOpen ? '500px' : '0' }}
  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} // Updated transition for smoother animation
  className={`overflow-hidden md:overflow-visible flex-col md:flex-row md:flex items-center w-full`}
>

      <div className={`flex-col md:flex-row md:flex items-center w-full ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <div className='w-full md:w-auto text-center'>
          <a href="#about" className="block text-4xl p-4 font-bold text-customWhite border-y-8 border-customYellow md:border-none md:hover:bg-customYellow">about</a>
        </div>

        <div className='w-full md:w-auto text-center'>
          <a href="#projects" className="block text-4xl p-4 font-bold text-customWhite border-b-8 border-customYellow md:border-none md:hover:bg-customYellow">projects</a>
        </div>

        <div className='w-full md:w-auto text-center'>
          <a href="#contact" className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow">contact</a>
        </div>
      </div>
      </motion.div>
    </nav>

    <header className="p-4 h-screen flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-80">
      <div className='flex flex-col items-center md:items-start'>
        <h1 className="text-4xl md:text-8xl font-bold text-customBlack">Hello!</h1>
        <h1 className="text-4xl md:text-8xl font-bold text-customBlack">I'm Tin.</h1>
        <span></span>
      </div>

      <div className='flex justify-center items-center'>
        <div className='bg-customBlack h-48 w-48 md:h-96 md:w-96 rounded-full'></div>
      </div>
    </header>
  </>
);
};

export default Header;