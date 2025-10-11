
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Layout, Target, RefreshCw, Scale, BookOpen, TrendingUp, Globe, Users } from 'lucide-react';

const FeatureBenefitMapSection = () => {
  const mapItems = [
    {
      feature: 'Scrape & monitor energy/property signals 24/7',
      benefit: 'Never miss emerging demand in any UK region or segment.'
    },
    {
      feature: 'AI filtering & qualification by "The Prospector"',
      benefit: 'Only sends good, relevant leads to outreach – drastically reduces wasted effort.'
    },
    {
      feature: 'Multi-channel outreach (voice, chat, SMS, email) by "The Closer"',
      benefit: 'Reach leads via their preferred channel, significantly increasing contact rates.'
    },
    {
      feature: 'AI-driven scripts & branching logic in "The Closer"',
      benefit: 'Delivers personalized messaging at scale, improving engagement and responses.'
    },
    {
      feature: 'Automated handover to human closers',
      benefit: 'Your human team focuses on high-value activities: closing and complex objections.'
    },
    {
      feature: 'Lead scoring & segmentation by vertical',
      benefit: 'Enables tailored campaigns for residential, landlord, industrial, and grid segments.'
    },
    {
      feature: 'Integrated into DX’s CRM / pipeline',
      benefit: 'Provides a single view of all lead data, reducing tool silos and manual updates.'
    },
    {
      feature: 'Automated follow-up drip sequences',
      benefit: 'Keeps leads warm and engaged over time, even if not immediately ready to buy.'
    },
    {
      feature: 'Analytics of lead source → conversion',
      benefit: 'Provides clear insights into which channels and verticals perform best, for continuous improvement.'
    },
    {
      feature: 'Local UK lead coverage & geographic scaling',
      benefit: 'Supports DX Energy\'s UK expansion without needing to scale local manpower.'
    },
    {
      feature: 'Targeted LinkedIn B2B outreach integration',
      benefit: 'Accesses decision-makers in high-value commercial and industrial sectors.'
    },
    {
      feature: 'SEO, Content & Awareness Campaign management',
      benefit: 'Builds brand authority, drives inbound traffic, and warms prospects before AI contact.'
    }
  ];

  return (
    <section id="feature-benefit-map" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            9. The Blueprint: <span className="text-gradient">Feature & Benefit Map</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            This map highlights how each component of our AI Sales Engine directly translates into tangible advantages and impactful outcomes for DX Energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-effect rounded-2xl p-8 flex flex-col justify-between hover:glow-effect transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-pink-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.feature}</h3>
                </div>
                <p className="text-white/70 text-lg flex items-start">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400 mr-2 mt-1" />
                  {item.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitMapSection;
