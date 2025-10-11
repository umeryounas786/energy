import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const handleAcceptProposal = () => {
    window.open('https://wa.me/447466436417', '_blank');
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden print:hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-indigo-900/30" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Rocket className="w-20 h-20 text-purple-400 mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient">Launch Your AI Sales Engine?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12">
            Let's partner to build the future of sales for DX Energy.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleAcceptProposal}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-10 py-7 glow-effect"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Accept Proposal & Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadPDF}
              className="border-2 border-white/20 hover:bg-white/10 text-lg px-10 py-7"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download as PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;