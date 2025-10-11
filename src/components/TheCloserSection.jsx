
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, MessageSquare, Mail, Linkedin, Calendar, CheckSquare, RefreshCw, Layers } from 'lucide-react';

const TheCloserSection = () => {
  const capabilities = [
    { icon: Phone, title: 'Autonomous Voice Calls', desc: 'AI makes outbound calls, listens, and extracts key information dynamically.' },
    { icon: MessageSquare, title: 'Multi-Channel Messaging', desc: 'Engages leads via SMS, chat, WhatsApp, and personalized LinkedIn messages.' },
    { icon: Mail, title: 'Intelligent Email Follow-up', desc: 'Adaptive drip campaigns that nurture leads and re-engage dormant prospects.' },
    { icon: Calendar, title: 'Automated Meeting Booking', desc: 'Qualifies interested leads and books meetings directly onto your team\'s calendar.' },
    { icon: CheckSquare, title: 'Dynamic Scripting', desc: 'Generates call/message scripts based on lead data and real-time responses (branching logic).' },
    { icon: Layers, title: 'CRM Integration & Updates', desc: 'Seamlessly logs all interactions, updates lead statuses, and pushes notifications to your CRM.' }
  ];

  const advantages = [
    { icon: Bot, title: 'Reduced Human Labor', desc: 'Drastically cuts down on manual outreach and initial qualification efforts.' },
    { icon: RefreshCw, title: 'Instant Follow-Up', desc: 'Ensures every qualified lead is contacted immediately, minimizing delays.' },
    { icon: Layers, title: 'Detailed Lead Info', desc: 'Captures in-depth lead data before human intervention, providing closers with context.' },
    { icon: CheckSquare, title: 'Continuous Engagement', desc: 'Keeps leads warm and engaged automatically through intelligent sequences.' },
    { icon: Calendar, title: 'Optimized Closures', desc: 'Minimizes missed opportunities and leads going cold due to lack of follow-up.' }
  ];

  return (
    <section id="the-closer" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            3. The Core Engine: <span className="text-gradient">The Closer (AI Engagement & Follow-Up)</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Once "The Prospector" identifies high-potential leads, "The Closer" AI agents take over, engaging and nurturing prospects until they are ready for a human sales interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">How it Works: The Closer Workflow</h3>
            <div className="space-y-4 text-lg text-white/80">
              <p>✅ Lead passes score threshold from 'The Prospector'.</p>
              <p>✅ AI agent (voice or chat) initiates dynamic, personalized contact.</p>
              <p>✅ Asks qualifying questions, listens to responses, and adapts conversation flow.</p>
              <p>✅ Updates lead data and CRM status based on interaction outcome.</p>
              <p>✅ If qualified and interested, triggers multi-channel follow-up (email, SMS, LinkedIn).</p>
              <p>✅ Books meetings directly for human closers or places leads into nurture sequences.</p>
              <p>✅ Generates automated summaries, call logs, and escalation alerts for human intervention when needed.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">Key Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="w-6 h-6 flex-shrink-0 text-pink-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            "The Closer" dramatically streamlines your sales process, ensuring every good lead gets the attention it deserves.
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

export default TheCloserSection;
