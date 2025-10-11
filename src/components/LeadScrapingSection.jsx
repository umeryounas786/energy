import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Zap, UserCheck } from 'lucide-react';

const LeadScrapingSection = () => {
  const advantages = [
    'Continuously fills funnel with high-potential leads.',
    'Reduces cost on cold list buys or manual prospecting.',
    'Segments leads by vertical for targeted outreach.',
    'Scales across the UK without scaling manpower.',
    'Ensures lead consistency and avoids pipeline gaps.'
  ];

  return (
    <section id="lead-scraping" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-6xl font-bold mb-6">
            1. <span className="text-gradient">The Prospector</span>: Lead Generation Engine
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            An always-on engine that scrapes and monitors the UK digital landscape for signals relevant to EV, battery, and energy storage demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">How it Works for DX Energy</h3>
            <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><Database className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" /><span><strong>Sources:</strong> Landlord/HMO registers, property listings, industrial user lists, and solar/grid project sites.</span></li>
                <li className="flex items-start gap-3"><Filter className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" /><span><strong>AI Filtering:</strong> Dismisses irrelevant leads (e.g., solar-only, competitors) and extracts contact info.</span></li>
                <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" /><span><strong>Lead Scoring:</strong> Assigns a 1-100 score based on building size, region, ownership, and other key features.</span></li>
                <li className="flex items-start gap-3"><UserCheck className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" /><span><strong>CRM Integration:</strong> Stores and tags all qualified leads directly in DX Energy's CRM by segment.</span></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 glow-effect"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">Advantages for DX Energy</h3>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-lg text-white/90"
                >
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  {advantage}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadScrapingSection;