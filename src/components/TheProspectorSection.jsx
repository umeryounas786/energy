
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Zap, RefreshCw, ArrowRight, TrendingUp, DollarSign, Target, Globe } from 'lucide-react';

const TheProspectorSection = () => {
  const sources = [
    'Landlord / HMO registers (UK local councils)',
    'Property listings (Rightmove, Zoopla, commercial portals)',
    'Building management forums & communities',
    'Industrial energy user lists & directories',
    'Solar / grid project pipeline sites',
    'Social media monitoring for intent signals'
  ];

  const advantages = [
    { icon: RefreshCw, title: 'Continuous Lead Flow', desc: 'Never-ending stream of high-potential leads, 24/7.' },
    { icon: DollarSign, title: 'Cost Reduction', desc: 'Significant savings by eliminating cold list buys and manual prospecting.' },
    { icon: Target, title: 'Targeted Outreach', desc: 'Leads segmented by vertical (residential, landlord, industrial, grid) for tailored messaging.' },
    { icon: Globe, title: 'Scalable Growth', desc: 'Effortlessly scales across all UK regions without increasing manpower.' },
    { icon: TrendingUp, title: 'Pipeline Consistency', desc: 'Ensures a steady and predictable sales pipeline, avoiding gaps.' }
  ];

  return (
    <section id="the-prospector" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            1. The Core Engine: <span className="text-gradient">The Prospector (Lead Generation)</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            This always-on AI engine continuously scans the UK digital landscape, harvesting and qualifying leads relevant to EV, battery storage, and energy demand for DX Energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">How it Works: The Prospector Workflow</h3>
            <div className="flex flex-col items-center gap-2 mb-8">
              <motion.div whileHover={{scale: 1.05}} className="glass-effect rounded-xl p-4 w-full text-center flex items-center justify-center gap-3"><Database className="w-6 h-6 text-pink-400"/> 1. Scrape & Monitor UK Digital Landscape (24/7)</motion.div>
              <ArrowRight className="w-8 h-8 my-2 text-purple-400 rotate-90 lg:rotate-0" />
              <motion.div whileHover={{scale: 1.05}} className="glass-effect rounded-xl p-4 w-full text-center flex items-center justify-center gap-3"><Filter className="w-6 h-6 text-pink-400"/> 2. AI Filters & Qualifies (Dismisses irrelevant leads)</motion.div>
              <ArrowRight className="w-8 h-8 my-2 text-purple-400 rotate-90 lg:rotate-0" />
              <motion.div whileHover={{scale: 1.05}} className="glass-effect rounded-xl p-4 w-full text-center flex items-center justify-center gap-3"><Zap className="w-6 h-6 text-pink-400"/> 3. Contact Extraction (Email, Phone, LinkedIn)</motion.div>
              <ArrowRight className="w-8 h-8 my-2 text-purple-400 rotate-90 lg:rotate-0" />
              <motion.div whileHover={{scale: 1.05}} className="glass-effect rounded-xl p-4 w-full text-center flex items-center justify-center gap-3"><TrendingUp className="w-6 h-6 text-pink-400"/> 4. Lead Scoring (1-100 scale, key features)</motion.div>
              <ArrowRight className="w-8 h-8 my-2 text-purple-400 rotate-90 lg:rotate-0" />
              <motion.div whileHover={{scale: 1.05}} className="glass-effect rounded-xl p-4 w-full text-center flex items-center justify-center gap-3"><Database className="w-6 h-6 text-pink-400"/> 5. Store in DX CRM (Tagged by segment)</motion.div>
            </div>
            <p className="text-center text-white/70 mt-6">This entire process runs on a custom-built workflow automation, ensuring a fresh, continuous flow of prospects into your pipeline without any manual intervention.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">Key Lead Sources</h3>
            <ul className="space-y-4">
              {sources.map((source, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-lg"
                >
                  <span className="text-purple-400 mr-3 text-2xl">•</span>
                  <span className="text-white/80">{source}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-gradient">Advantages for DX Energy</h3>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            "The Prospector" ensures your sales funnel is always full of relevant, high-potential leads.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
            >
              <item.icon className="w-14 h-14 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProspectorSection;
