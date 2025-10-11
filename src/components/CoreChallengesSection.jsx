
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Filter, Users, DollarSign, Target, DatabaseZap, MessageSquare as MessageSquareWarning } from 'lucide-react';

const CoreChallengesSection = () => {
    const challenges = [
        { icon: Filter, title: "Mis-Targeted Leads", text: "Wasting budget on 'solar' inquiries instead of core battery/storage customers." },
        { icon: DollarSign, title: "Manual Inefficiency", text: "High overhead and lost opportunity from manual cold calling and outreach." },
        { icon: Users, title: "Agency Over-Reliance", text: "Depending on external agencies with unpredictable quality and high costs." },
        { icon: Target, title: "Market Penetration", text: "Struggling to break into key growth markets like landlords and agricultural sectors." },
        { icon: DatabaseZap, title: "Data Chaos", text: "Leads are scattered, making follow-up inconsistent and tracking ROI impossible." },
        { icon: MessageSquareWarning, title: "Inconsistent Messaging", text: "Different team members using varied pitches, diluting your brand's value proposition." },
    ];

    return (
        <section id="challenges" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <AlertTriangle className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Addressing Your Core Challenges
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Your current hurdles aren't isolated issues. We've designed a comprehensive solution to solve them all, systematically.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {challenges.map((challenge, index) => (
                       <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-effect p-8 rounded-3xl w-full border border-purple-800/50 shadow-lg shadow-purple-950/20"
                       >
                            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                <challenge.icon className="w-16 h-16 text-yellow-400 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gradient mb-2">{challenge.title}</h3>
                                    <p className="text-lg text-white/90">
                                        {challenge.text}
                                    </p>
                                </div>
                            </div>
                       </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreChallengesSection;
