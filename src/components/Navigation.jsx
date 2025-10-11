
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const navLinks = [
    { name: 'Challenges', href: '#challenges' },
    { name: 'Prospector', href: '#prospector' },
    { name: 'Closer', href: '#closer' },
    { name: 'Solution', href: '#solution' },
    { name: 'Services', href: '#services' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Advantages', href: '#advantages' },
    { name: 'Investment', href: '#pricing' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-gradient">AI Sales Engine</span>
            </a>

            <div className="hidden lg:flex items-center gap-1 flex-grow justify-center">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={(e) => {e.preventDefault(); scrollToSection(link.href)}} className="text-white/80 hover:text-white transition-colors font-medium px-3 py-2 rounded-md">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
               <a 
                href="https://wa.me/447466436417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <WhatsappIcon className="w-5 h-5" />
                <span>Book a Talk</span>
              </a>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white z-50">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center gap-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={(e) => {e.preventDefault(); scrollToSection(link.href)}} className="text-2xl text-white/90 hover:text-purple-400 transition-colors text-center">
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/447466436417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-xl mt-4"
              >
                <WhatsappIcon className="w-6 h-6" />
                <span>Book a Talk</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
