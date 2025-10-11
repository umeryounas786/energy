
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleAcceptProposal = () => {
    window.open('https://wa.me/447466436417', '_blank', 'noopener,noreferrer');
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6 px-6 py-3 glass-effect rounded-full"
          >
            <span className="text-gradient font-semibold">Laskon AI: The AI Sales Engine</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reduce Your Physical Force by 80% & Automate Your Sales
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            This proposal outlines a powerful, custom-built system to solve your sales frustrations, reduce costs by over 70%, and generate a consistent flow of qualified leads.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16 hero-buttons">
            <Button onClick={handleAcceptProposal} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 glow-effect">
              Accept Proposal
            </Button>
            <Button onClick={handleDownloadPDF} size="lg" variant="outline" className="border-2 border-white/20 hover:bg-white/10 text-lg px-8 py-6">
              Download as PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, label: '24/7 AI Agents', value: 'Always On' },
              { icon: TrendingUp, label: 'Lead Conversion', value: '+300%' },
              { icon: Users, label: 'Cost Reduction', value: '-70%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
  