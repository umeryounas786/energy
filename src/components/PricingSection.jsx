import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Repeat } from 'lucide-react';

const PricingSection = () => {
    const oneTimeFeatures = [
        "Full AI Sales Engine Architecture & Build",
        "The Prospector: Multi-Source Lead Scraping Module",
        "The Closer: Conversational AI Engagement Agent",
        "Seamless CRM Integration & Data Mapping",
        "Custom Data Enrichment & Verification Pipelines",
        "Initial SEO & High-Authority Content Foundation",
        "LinkedIn Automation & Profile Warming Setup",
        "Bespoke Workflow Design & Strategy Session",
        "Comprehensive Team Onboarding & Playbook",
        "30-Day Post-Launch Hypercare Support"
    ];

    const monthlyFeatures = [
        "Proactive AI Agent & Workflow Management",
        "Continuous Website & Technical SEO Audits",
        "Performance-Focused Ad Campaign Optimization",
        "LinkedIn B2B Outreach & Network Growth",
        "A/B Testing of Scripts, Channels & Cadences",
        "Advanced Performance Reporting & Dashboards",
        "Monthly Strategy & ROI Review Meeting",
        "Ongoing System Enhancements & Feature Rollouts"
    ];

    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Investment Overview
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        A transparent and straightforward investment in a powerful growth engine for DX Energy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-effect rounded-3xl p-8 border border-purple-800/50 flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-purple-600 p-3 rounded-full">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">One-Time Setup</h2>
                        </div>
                        <p className="text-5xl font-bold my-6">£3,000</p>
                        <p className="text-white/80 mb-8">This foundational investment covers the complete architectural design, development, and deployment of your bespoke AI Sales Engine. We build the entire system from scratch, tailored to your specific needs, and ensure it's fully integrated and ready to perform from day one.</p>
                        <ul className="space-y-4 flex-grow">
                            {oneTimeFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-effect rounded-3xl p-8 border border-pink-500/50 glow-effect flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-4">
                             <div className="bg-pink-600 p-3 rounded-full">
                                <Repeat className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Monthly Retainer</h2>
                        </div>
                        <p className="text-5xl font-bold my-6">£1,200 <span className="text-2xl font-normal text-white/70">/month</span></p>
                        <p className="text-white/80 mb-8">Think of this as your dedicated AI operations team. We provide comprehensive management, continuous optimization, and strategic oversight to ensure your sales engine is not just running, but constantly evolving and improving to maximize ROI and drive sustained growth.</p>
                        <ul className="space-y-4 flex-grow">
                            {monthlyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10 text-white/70 text-sm">
                            <p><strong>Note:</strong> This excludes monthly third-party tool costs (e.g., n8n, CRM, data APIs, ad spend), estimated at £200-£350 per month, to be billed directly to you for full transparency.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;