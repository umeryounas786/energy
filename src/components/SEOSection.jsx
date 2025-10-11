import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, FileText, Link } from 'lucide-react';

const SEOSection = () => {
  const strategies = [
    {
      icon: FileText,
      title: 'Content Marketing',
      points: [
        'Strategic blog posts on topics like "How much can a battery save on home energy bills?" to capture organic traffic.',
        'A consistent schedule of 2-4 posts per month to build authority and drive continuous inbound leads.'
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      points: [
        'Full on-page, technical, and local SEO implementation to rank for high-intent keywords in the UK market.',
        'Focus on optimizing for site speed, mobile experience, and regional targeting.'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Low-Cost Awareness Campaigns',
      points: [
        'Targeted digital ads (Meta/Google) with direct messaging like "Cut your EV charging cost by 70%".',
        'Ads will drive traffic to high-converting landing pages with lead capture forms, feeding the AI agent funnel.'
      ]
    },
    {
      icon: Link,
      title: 'Authority Building',
      points: [
        'A proactive link-building strategy to acquire backlinks from reputable energy and property industry websites.',
        'This boosts domain authority and improves search rankings over time.'
      ]
    }
  ];

  return (
    <section id="seo" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            2. Fueling the Funnel: <span className="text-gradient">SEO & Awareness</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Even the best engine needs fuel. We'll implement a multi-faceted strategy to fill your sales funnel with a steady stream of high-quality inbound leads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
            >
              <strategy.icon className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-2xl font-bold mb-4">{strategy.title}</h3>
              <ul className="space-y-3">
                {strategy.points.map((point, i) => (
                  <li key={i} className="text-white/70 flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOSection;