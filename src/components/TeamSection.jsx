
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Bot, TrendingUp } from 'lucide-react';

const TeamSection = () => {
  const stats = [
    {
      icon: Bot,
      title: 'AI Agent Interactions',
      value: 'Hundreds/day',
      desc: 'Calls and messages per day, operating 24/7 without fatigue.'
    },
    {
      icon: Users,
      title: 'Human Closers',
      value: '2-5 FTE',
      desc: 'A lean, expert team focused ONLY on high-intent, warm leads.'
    },
    {
      icon: TrendingUp,
      title: 'Qualified Meetings/Day',
      value: '5-45+',
      desc: 'Automatically booked meetings for your closers, scaled by lead volume.'
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            5. The Team Structure: <span className="text-gradient">Lean & Hyper-Efficient</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            This system enables a dramatic shift in your team structure, moving from a large outreach team to a small group of expert closers supported by an army of AI agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-3xl p-8 text-center hover:glow-effect transition-all duration-300"
            >
              <stat.icon className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <div className="text-5xl font-bold text-gradient mb-3">{stat.value}</div>
              <h3 className="text-2xl font-bold mb-3">{stat.title}</h3>
              <p className="text-white/70">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6 text-gradient text-center">Projected Lead Flow with AI Sales Engine</h3>
          <div className="space-y-6 text-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-white/80">Daily Scraped Leads (The Prospector):</span>
              <span className="font-bold text-purple-400">500 - 1,000</span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-white/80">High-Scoring Leads Sent to The Closer (5-15%):</span>
              <span className="font-bold text-pink-400">25 - 150 / day</span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-white/80">Booked Meetings from The Closer AI (20-30% engagement):</span>
              <span className="font-bold text-indigo-400">5 - 45 / day</span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-white/80">Human Closer Workload:</span>
              <span className="font-bold text-green-400">Only handling pre-qualified, warm meetings.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
