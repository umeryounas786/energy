import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, Users, DollarSign, Clock, Target, Scale, BrainCircuit, Repeat } from 'lucide-react';

const AdvantagesSection = () => {
    const advantages = [
        {
            icon: Zap,
            title: "First-Mover Advantage",
            description: "Our AI operates 24/7, securing leads on a 'first come, first served' basis. While competitors sleep, your engine is capturing opportunities, giving you an unbeatable head start in every area."
        },
        {
            icon: DollarSign,
            title: "Drastic Payroll Reduction",
            description: "Automate the work of an entire sales development team. We estimate an 80% reduction in costs typically allocated to payroll for prospecting and initial outreach roles."
        },
        {
            icon: Clock,
            title: "Eliminate Manual Workflows",
            description: "Replace time-consuming, error-prone manual tasks like data entry, list building, and follow-up emails with a fully automated, efficient, and reliable system."
        },
        {
            icon: Scale,
            title: "Unmatched Scalability & Reach",
            description: "Your AI can contact thousands of prospects per day across the entire UK—a scale that is physically and financially impossible for a human team to achieve."
        },
        {
            icon: ShieldCheck,
            title: "Perfect Consistency",
            description: "Every lead receives the perfect, on-brand message every single time. Eliminate performance slumps, sick days, and human error from your outreach process."
        },
        {
            icon: TrendingUp,
            title: "Data-Driven Optimization",
            description: "The AI constantly learns which scripts, channels, and times are most effective, automatically refining its approach to continuously improve conversion rates over time."
        },
        {
            icon: Target,
            title: "Hyper-Targeted Prospecting",
            description: "Move beyond broad strokes. The AI identifies and targets niche segments and high-value prospects with a level of precision that manual research cannot match."
        },
        {
            icon: Users,
            title: "Empower Your Sales Closers",
            description: "Free your best salespeople from prospecting. Let them focus 100% of their time on what they do best: building relationships and closing pre-qualified, high-intent deals."
        },
        {
            icon: BrainCircuit,
            title: "Centralized Intelligence",
            description: "All data, from lead source to final outcome, is tracked in one place. Gain a complete, 360-degree view of your sales pipeline and make smarter strategic decisions."
        },
        {
            icon: Repeat,
            title: "Relentless Follow-Up",
            description: "The AI never forgets. It executes perfectly timed, multi-channel follow-up sequences to nurture leads over weeks or months, ensuring no opportunity ever falls through the cracks."
        }
    ];

    return (
        <section id="advantages" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        The Strategic <span className="text-gradient">Advantages</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        This isn't just an upgrade; it's a fundamental shift in how you acquire customers, designed to deliver compounding returns.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-effect rounded-2xl p-6 flex gap-6 items-start hover:border-purple-500/50 transition-colors duration-300"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="bg-purple-900/50 p-3 rounded-full">
                                    <advantage.icon className="w-6 h-6 text-purple-300" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                                <p className="text-white/80">{advantage.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;