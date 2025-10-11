
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, FileText, TrendingUp, Brush } from 'lucide-react';

const SocialSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'Blog & SEO Management',
      points: [
        'A consistent schedule of 2-4 high-value blog posts per month, focused on product ROI, case studies, and market trends.',
        'Continuous SEO optimization for UK + region + vertical keywords to attract organic search traffic.',
        'Organic leads from this content will feed directly into "The Prospector" system.'
      ]
    },
    {
      icon: Brush,
      title: 'Social Media Management',
      points: [
        'Active management of your company pages on LinkedIn, X (Twitter), and Facebook.',
        'Posting energy tips, case studies, and new product announcements to build an engaged audience.',
        'Social channels build trust and act as "proof + reinforcement" when AI agents or human closers make contact.'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Awareness Campaign Management',
      points: [
        'Management of low-cost social media (Meta) and search (Google) ad campaigns to increase awareness among target demographics.',
        'Continuous testing and optimization of ad creative and targeting using AI tools to maximize CPC efficiency.',
        'These campaigns act as a volume filler, directing traffic to lead capture forms that feed "The Prospector" funnel.'
      ]
    }
  ];

  return (
    <section id="content-campaigns" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            7. The Support System: <span className="text-gradient">Content & Campaign Management</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            To ensure maximum effectiveness, we will manage the content and social campaigns that build trust, amplify your brand's reach, and continually feed the AI Sales Engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-3xl p-8 hover:glow-effect transition-all duration-300"
            >
              <service.icon className="w-14 h-14 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="text-white/70 flex items-start">
                    <span className="text-pink-400 mr-2">▸</span>
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

export default SocialSection;
