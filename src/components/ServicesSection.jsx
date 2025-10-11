import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Search, Megaphone, BarChart3, Users, Settings } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Settings,
            title: 'AI Agent & Workflow Management',
            description: 'We build, train, and manage your AI sales agents and the intelligent workflows they run on, ensuring they operate seamlessly and effectively.',
        },
        {
            icon: Search,
            title: 'SEO & Content Marketing',
            description: 'We create and manage a strategic blog with optimized content to drive a continuous flow of high-intent organic leads into your AI funnel.',
        },
        {
            icon: Megaphone,
            title: 'Digital Ad Campaigns',
            description: 'We run modest-budget, high-ROI ad campaigns on Meta and Google to fill the top of your funnel with qualified prospects for the AI agents.',
        },
        {
            icon: Linkedin,
            title: 'LinkedIn B2B Automation',
            description: 'We target key B2B decision-makers with automated, personalized outreach sequences that feed directly into your AI sales agents.',
        },
        {
            icon: Users,
            title: 'Lean Team Consulting',
            description: 'We help you structure a hyper-efficient human team (2-4 closers) and create workflows for seamless handovers from AI to human.',
        },
        {
            icon: BarChart3,
            title: 'Continuous Optimization',
            description: 'We establish a continuous feedback loop, using deal outcomes to constantly refine AI scripts, lead scoring, and targeting for ever-improving results.',
        },
    ];

    return (
        <section id="services" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        A <span className="text-gradient">Full-Service Partnership</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        This isn't just a tool; it's a complete, managed solution. We provide all the supporting services needed to ensure your AI Sales & Marketing Engine runs at peak performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
                        >
                            <service.icon className="w-14 h-14 mb-6 text-purple-400" />
                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                            <p className="text-white/80 text-lg">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;