
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Milestone } from 'lucide-react';

const TimelineSection = () => {
    const milestones = [
        {
            week: "Week 1",
            title: "Discovery & Foundation",
            tasks: ["Deep-dive workshop to define Ideal Customer Profile (ICP)", "Technical setup of CRM, domains, and n8n environment", "Initial AI agent architecture design"]
        },
        {
            week: "Week 2",
            title: "The Prospector: Build & Deploy",
            tasks: ["Develop and test lead scraping scripts for public registers & portals", "Configure LinkedIn Sales Navigator and data enrichment APIs", "Deploy 'The Prospector' for initial data collection"]
        },
        {
            week: "Week 3-4",
            title: "The Closer: AI Agent Training",
            tasks: ["Develop dynamic call scripts and multi-channel messaging sequences", "Train the AI on objection handling and qualification criteria", "Integrate AI with calendar booking and CRM for automated logging"]
        },
        {
            week: "Week 5",
            title: "System Integration & Testing",
            tasks: ["End-to-end testing of the full funnel: from lead scraping to meeting booking", "Set up SEO foundation and initial awareness campaigns", "Refine lead scoring and human handoff protocols"]
        },
        {
            week: "Week 6",
            title: "Launch & Optimization",
            tasks: ["Full system go-live and active campaign launch", "Establish reporting dashboards and KPI tracking", "First monthly strategy meeting to review early data and plan optimizations"]
        }
    ];

    return (
        <section id="timeline" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Calendar className="w-20 h-20 text-purple-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Project Timeline: <span className="text-gradient">6 Weeks to Launch</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        We follow a structured, agile approach to get your AI Sales Engine operational and delivering value as quickly as possible.
                    </p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-white/10"></div>
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center w-full mb-8"
                        >
                            <div className="flex-1">
                                {index % 2 === 0 && (
                                    <div className="text-right pr-8">
                                        <h2 className="text-2xl font-bold text-pink-400 mb-2">{milestone.week}</h2>
                                        <div className="glass-effect rounded-2xl p-6 text-left">
                                            <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                            <ul className="space-y-2 text-white/80">
                                                {milestone.tasks.map((task, i) => <li key={i}>- {task}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="z-10 bg-purple-600 rounded-full p-3 glow-effect">
                                <Milestone className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                {index % 2 !== 0 && (
                                    <div className="pl-8">
                                        <h2 className="text-2xl font-bold text-pink-400 mb-2">{milestone.week}</h2>
                                        <div className="glass-effect rounded-2xl p-6">
                                            <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                            <ul className="space-y-2 text-white/80">
                                                {milestone.tasks.map((task, i) => <li key={i}>- {task}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-10 bg-green-500 rounded-full p-4 glow-effect">
                        <Rocket className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
