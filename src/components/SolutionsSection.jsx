
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
    return (
        <section id="solution" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                     <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        From <span className="text-red-400">Frustration</span> to <span className="text-green-400">Automation</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Our integrated AI engine is engineered to directly replace your current pains with powerful, automated solutions. Here’s a clear picture of the transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-3xl p-8"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-red-400 flex items-center gap-3">
                            <XCircle className="w-8 h-8" />
                            Current Pains
                        </h2>
                        <ul className="space-y-6 text-lg">
                            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">●</span><div><strong>Lead Misclassification:</strong> Wasting time on "solar" leads that don't fit.</div></li>
                            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">●</span><div><strong>Manual Outreach:</strong> Inefficient and costly cold calling by staff.</div></li>
                            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">●</span><div><strong>Agency Reliance:</strong> High costs for external agencies with uncertain ROI.</div></li>
                            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">●</span><div><strong>Untargeted Markets:</strong> Struggling to reach key sectors like landlords & agriculture.</div></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-3xl p-8 glow-effect"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8" />
                            Our AI-Powered Solutions
                        </h2>
                        <ul className="space-y-6 text-lg">
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">●</span><div><strong>AI Agent Qualification:</strong> Your AI asks specific questions to instantly filter out irrelevant leads, powered by our <span className="font-bold text-purple-300">AI Agent & Workflow Management</span>.</div></li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">●</span><div><strong>24/7 Automated Engagement:</strong> The AI works around the clock, engaging leads so your team doesn't have to, leveraging <span className="font-bold text-purple-300">Continuous Optimization</span>.</div></li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">●</span><div><strong>In-House Automation Engine:</strong> A scalable digital sales team with predictable costs, including <span className="font-bold text-purple-300">Lean Team Consulting</span> for a seamless handover.</div></li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">●</span><div><strong>Precision Lead Sourcing:</strong> The AI finds your ideal customers using <span className="font-bold text-purple-300">SEO, Digital Ads, and LinkedIn B2B Automation</span>.</div></li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center flex-col md:flex-row gap-4 glass-effect rounded-full px-8 py-4 text-xl font-bold">
                        <span>From "Pay humans to hunt"</span>
                        <ArrowRight className="w-6 h-6 text-purple-400" />
                        <span className="text-gradient">To "AI hunts & qualifies, you close"</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsSection;
