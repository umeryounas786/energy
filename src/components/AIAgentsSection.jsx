import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, MessageSquare, Mail, RefreshCw } from 'lucide-react';

const AIAgentsSection = () => {
  const advantages = [
    'Drastically reduces human outreach labor costs.',
    'Ensures every good lead is followed up immediately.',
    'Captures detailed lead info before human intervention.',
    'Keeps leads warm and engaged automatically.',
    'Minimizes missed opportunities and leads going cold.'
  ];

  return (
    <section id="ai-agents" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            2. <span className="text-gradient">The Closer</span>: AI Engagement & Follow-Up
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            When a lead from 'The Prospector' passes the quality threshold, 'The Closer' is triggered to engage, qualify, and move the lead down the funnel.
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
                <li className="flex items-start gap-3"><Bot className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" /><span><strong>Dynamic Scripts:</strong> Generates call/message scripts based on the lead's data and segment.</span></li>
                <li className="flex items-start gap-3"><Phone className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" /><span><strong>Voice Calls:</strong> Makes automated voice calls to listen and extract answers (budget, timeline, interest).</span></li>
                <li className="flex items-start gap-3"><MessageSquare className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" /><span><strong>Multi-channel Follow-up:</strong> Triggers emails, SMS, and LinkedIn messages if qualified interest is detected.</span></li>
                <li className="flex items-start gap-3"><RefreshCw className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" /><span><strong>CRM & Handover:</strong> Updates CRM status, logs calls, and sends escalation alerts for human takeover.</span></li>
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

export default AIAgentsSection;