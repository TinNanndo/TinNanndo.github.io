import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 767;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: '-100%' }
  };

  return (
    <>
      <nav className="bg-customOrange border-b-8 border-customYellow rounded-t-md flex flex-col md:flex-row items-center justify-between md:justify-start">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-4xl p-4 text-customWhite md:hover:bg-customYellow rounded-tl-md cursor-pointer">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="md:hidden text-4xl p-4 text-customWhite z-50" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </div>

        <AnimatePresence>
          {(menuOpen || !isMobile) && (
            <motion.div
              className={`flex-col md:flex-row md:flex items-center w-full md:w-auto ${
                menuOpen || !isMobile ? 'flex' : 'hidden'
              } md:flex md:static md:h-auto absolute top-0 left-0 h-full bg-customOrange z-40 transition-transform transform`}
              initial="hidden"
              animate={menuOpen || !isMobile ? 'visible' : 'hidden'}
              exit="exit"
              variants={isMobile ? menuVariants : {}}
              transition={{ duration: 0.3 }}
            >
              <div className='relative top-32 right-16 md:static md:top-0 md:right-0 flex flex-col md:flex-row'>
                <div className="w-full md:w-auto">
                  <a
                    href="#about"
                    className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow"
                    onClick={() => setMenuOpen(false)}
                  >
                    about
                  </a>
                </div>

                <div className="w-full md:w-auto">
                  <a
                    href="#projects"
                    className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow"
                    onClick={() => setMenuOpen(false)}
                  >
                    projects
                  </a>
                </div>

                <div className="w-full md:w-auto">
                  <a
                    href="#contact"
                    className="block text-4xl p-4 font-bold text-customWhite md:hover:bg-customYellow"
                    onClick={() => setMenuOpen(false)}
                  >
                    contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <header className="p-4 h-screen flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20 lg:space-x-40 xl:space-x-64">
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-customBlack text-center md:text-left"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello!
            </motion.h1>
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-customBlack text-center md:text-left md:relative md:left-2 xl:left-8"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I'm Tin.
            </motion.h1>

            <motion.span
              className='text-lg md:text-lg xl:text-xl text-customBlack text-center md:text-left'
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I'm a passionate junior web designer with strong <br />focus on front-end development and UI/UX design.
            </motion.span>
          </motion.div>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.48, 0.15, 0.25, 0.96],
            }}
          >
            <div className="bg-customBlack h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full"></div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
