import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove overflow-hidden when the component is unmounted or menu is closed
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-customOrange border-b-8 border-customYellow rounded-t-md flex flex-col md:flex-row items-center justify-between md:justify-start">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-4xl p-4 text-customWhite hover:bg-customYellow rounded-tl-md">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="md:hidden text-4xl p-4 text-customWhite z-50" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </div>

        <div
          className={`flex-col md:flex-row md:flex items-center w-full md:w-auto absolute top-0 left-0 h-full bg-customOrange z-40 transition-transform transform ${
            menuOpen ? 'flex' : 'hidden'
          } md:static md:flex md:h-auto`}
        >
          <div className='relative top-32 right-16 md:static md:top-0 md:right-0 flex flex-col md:flex-row'>
          <div className="w-full md:w-auto">
            <a
              href="#about"
              className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow"
              onClick={() => setMenuOpen(false)}  // Close menu when clicked
            >
              about
            </a>
          </div>

          <div className="w-full md:w-auto">
            <a
              href="#projects"
              className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow"
              onClick={() => setMenuOpen(false)}  // Close menu when clicked
            >
              projects
            </a>
          </div>

          <div className="w-full md:w-auto">
            <a
              href="#contact"
              className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow"
              onClick={() => setMenuOpen(false)}  // Close menu when clicked
            >
              contact
            </a>
          </div>
          </div>
        </div>
      </nav>

      <header className="p-4 h-screen flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-80">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-8xl font-bold text-customBlack">Hello!</h1>
          <h1 className="text-4xl md:text-8xl font-bold text-customBlack">I'm Tin.</h1>
          <span></span>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-customBlack h-48 w-48 md:h-96 md:w-96 rounded-full"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
