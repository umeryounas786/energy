import React from 'react';
import { motion } from 'framer-motion';
import { FileWarning, UserX, Briefcase, Building, Target, Zap } from 'lucide-react';

const IssuesSection = () => {
    const issues = [
        {
            icon: FileWarning,
            title: 'Frustrating Lead Misclassification',
            description: 'Anthony is tired of being labeled a "solar company." Your core business in energy storage gets lost, leading to wasted time on misaligned prospects.',
        },
        {
            icon: UserX,
            title: 'No Internal Sales Team & Agency Reliance',
            description: 'The lack of an internal sales team creates a heavy dependency on manual, inconsistent outreach and costly agencies with uncertain results.',
        },
        {
            icon: Briefcase,
            title: 'Untapped High-Value Markets',
            description: 'Significant opportunities in B2B (factories) and lucrative niches (agriculture, landlords, HMOs) remain largely untapped due to a lack of targeted outreach.',
        },
        {
            icon: Zap,
            title: 'Inefficient Manual Processes',
            description: 'Manual cold calling, lead qualification, and follow-ups are slow, expensive, and lead to valuable opportunities slipping through the cracks.',
        },
    ];

    return (
        <section id="issues" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Addressing Your <span className="text-gradient">Core Challenges</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        This proposal is built on a deep understanding of the specific hurdles and frustrations DX Energy faces today. We solve these head-on.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {issues.map((issue, index) => (
                        <motion.div
                            key={issue.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
                        >
                            <issue.icon className="w-14 h-14 mb-6 text-red-400" />
                            <h2 className="text-2xl font-bold mb-4">{issue.title}</h2>
                            <p className="text-white/80 text-lg">{issue.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IssuesSection;