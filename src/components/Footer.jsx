import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-gradient mb-4">Proposal for DX Energy</div>
            <p className="text-white/70">
              A custom-built AI Sales & Marketing Engine to revolutionize your growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-bold mb-4">Quick Links</p>
            <div className="space-y-2 text-white/70">
              <a href="#challenges" onClick={(e) => {e.preventDefault(); scrollToSection('#challenges')}} className="block hover:text-white transition-colors">Core Challenges</a>
              <a href="#prospector" onClick={(e) => {e.preventDefault(); scrollToSection('#prospector')}} className="block hover:text-white transition-colors">The Prospector</a>
              <a href="#closer" onClick={(e) => {e.preventDefault(); scrollToSection('#closer')}} className="block hover:text-white transition-colors">The Closer</a>
              <a href="#solution" onClick={(e) => {e.preventDefault(); scrollToSection('#solution')}} className="block hover:text-white transition-colors">Our Solution</a>
              <a href="#services" onClick={(e) => {e.preventDefault(); scrollToSection('#services')}} className="block hover:text-white transition-colors">Our Services</a>
              <a href="#timeline" onClick={(e) => {e.preventDefault(); scrollToSection('#timeline')}} className="block hover:text-white transition-colors">Timeline</a>
              <a href="#advantages" onClick={(e) => {e.preventDefault(); scrollToSection('#advantages')}} className="block hover:text-white transition-colors">Advantages</a>
              <a href="#pricing" onClick={(e) => {e.preventDefault(); scrollToSection('#pricing')}} className="block hover:text-white transition-colors">Investment</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-bold mb-4">Contact</p>
            <div className="space-y-3 text-white/70">
              <a href="mailto:sales@laskontech.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                sales@laskontech.com
              </a>
              <a href="tel:+447466436417" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +447466436417
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} AI Sales Engine Proposal. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed by <a href="https://www.laskontech.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-400 hover:underline">Laskon Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;