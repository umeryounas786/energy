
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Target, Bot, FileText, Calendar, Share2 } from 'lucide-react';

const LinkedInSection = () => {
  const steps = [
    {
      icon: Target,
      title: 'Precision Targeting',
      desc: 'Leveraging Sales Navigator to filter and identify key decision-makers (developers, EPC firms, property managers) in target verticals.'
    },
    {
      icon: Bot,
      title: 'AI-Personalized Outreach',
      desc: 'Our system automates connection requests and messages, dynamically personalizing them at scale with prospect-specific details and pain points.'
    },
    {
      icon: FileText,
      title: 'Automated Sequence Flows',
      desc: 'We\'ll build multi-step outreach sequences: Connection → Intro → Value Prop → Case Study → Meeting Request, with smart automated follow-ups.'
    },
    {
      icon: Calendar,
      title: 'Intelligent Handover to The Closer',
      desc: 'If a prospect replies positively, "The Closer" AI agent can engage further, or instantly route the lead to a human closer with full context for takeover.'
    },
    {
      icon: Share2,
      title: 'Content Warming Strategy',
      desc: 'Use content and posts (success stories, whitepapers) to warm your LinkedIn audience, making direct outreach feel less "cold".'
    }
  ];

  return (
    <section id="linkedin-b2b" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Linkedin className="w-16 h-16 text-blue-400" />
            <h2 className="text-4xl md:text-6xl font-bold">
              6. <span className="text-gradient">LinkedIn B2B Marketing</span> Automation
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            To capture high-value commercial clients, we'll deploy a sophisticated, automated outreach system on LinkedIn, integrated with our AI Sales Engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
            >
              <step.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/70 text-lg">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
