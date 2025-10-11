
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BarChart3, RefreshCw, TrendingUp, Award, Zap } from 'lucide-react';

const SalesExecutionSection = () => {
  const principles = [
    {
      icon: Zap,
      title: 'AI on the Front-Line',
      desc: '"The Closer" AI agents handle the high volume of initial outreach and qualification, filtering out unsuitable leads automatically.'
    },
    {
      icon: Users,
      title: 'Humans as Expert Closers',
      desc: 'Your sales team focuses exclusively on high-value activities: closing deals, complex negotiations, and managing key accounts.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Context',
      desc: 'Human closers receive leads from "The Closer" with full context—including interaction history, objections, and qualification scores.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Optimization',
      desc: 'We will constantly A/B test AI scripts, messages, and sequences to improve conversion rates and engagement over time.'
    },
    {
      icon: TrendingUp,
      title: 'Actionable Feedback Loop',
      desc: 'Reasons for lost deals are fed back into the system, allowing us to refine AI logic, lead scoring, and targeting criteria in "The Prospector".'
    },
    {
      icon: Award,
      title: 'Prioritize High-Value Verticals',
      desc: 'The system can be configured to push the most valuable leads (e.g., grid, industrial) directly to your top-performing closers.'
    }
  ];

  return (
    <section id="execution" className="py-24 relative bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            8. Execution: <span className="text-gradient">A "Best of Best" Sales Process</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our approach combines the best of AI efficiency and human expertise, creating a sales execution model that is second to none for DX Energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
            >
              <principle.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-white/70">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesExecutionSection;
