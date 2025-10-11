import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Zap, TrendingUp, Target, Home, Building, Linkedin, Clock } from 'lucide-react';

const ProspectorSection = () => {
    return (
        <section id="prospector" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Target className="w-20 h-20 text-purple-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold tracking-tight uppercase text-purple-400 mb-4">AI Agent Module 1</h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        The Prospector: <span className="text-gradient">Automated Lead Discovery</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        This AI agent is your 24/7 digital scout. It executes a detailed, multi-step process to continuously scan the UK for high-intent signals, automatically building a pipeline of qualified leads.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto glass-effect rounded-3xl p-10">
                     <h3 className="text-3xl font-bold mb-8 text-gradient text-center">The Detailed Lead Scraping Procedure</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <div>
                            <h4 className="flex items-center gap-3 text-2xl font-bold mb-4 text-pink-400"><Home className="w-7 h-7"/>Scraping Public Registers</h4>
                            <p className="text-lg text-white/80 pl-10">Our automated scripts visit UK local council websites every six hours, navigate to the public landlord and HMO registration sections, and systematically extract names, property addresses, and contact details where available.</p>
                        </div>
                        <div>
                            <h4 className="flex items-center gap-3 text-2xl font-bold mb-4 text-pink-400"><Building className="w-7 h-7"/>Monitoring Property Portals</h4>
                            <p className="text-lg text-white/80 pl-10">We constantly monitor platforms like Rightmove and Zoopla, identifying properties for rent by private landlords. The agent captures landlord contact information from listings to build a targeted database.</p>
                        </div>
                        <div>
                            <h4 className="flex items-center gap-3 text-2xl font-bold mb-4 text-pink-400"><Linkedin className="w-7 h-7"/>Targeting on LinkedIn</h4>
                            <p className="text-lg text-white/80 pl-10">Using Sales Navigator, the AI agent searches for profiles matching key job titles like "Property Manager," "Facilities Manager," and directors of student accommodation firms, collecting their professional contact data for B2B outreach.</p>
                        </div>
                         <div>
                            <h4 className="flex items-center gap-3 text-2xl font-bold mb-4 text-pink-400"><Filter className="w-7 h-7"/>AI Filtering & Qualification</h4>
                            <p className="text-lg text-white/80 pl-10">Every piece of raw data is processed by an AI filter. It discards duplicates, removes incomplete or irrelevant entries (e.g., "solar-only" queries), and cross-references data to ensure high accuracy before it enters the next stage.</p>
                        </div>
                         <div>
                            <h4 className="flex items-center gap-3 text-2xl font-bold mb-4 text-pink-400"><Zap className="w-7 h-7"/>Data Enrichment</h4>
                            <p className="text-lg text-white/80 pl-10">Cleaned leads are then passed to data enrichment APIs. These services fill in any missing information, such as business emails, direct phone numbers, and company size, creating a complete profile for each prospect.</p>
                        </div>
                         <div>
                            <h4 className="flex items-center gap-3 text-2xl font-bold mb-4 text-pink-400"><TrendingUp className="w-7 h-7"/>Scoring & Delivery</h4>
                            <p className="text-lg text-white/80 pl-10">Finally, each enriched lead is scored based on your ideal customer profile (e.g., number of properties, region). High-scoring, hot leads are then pushed directly into your CRM, tagged and ready for engagement by "The Closer."</p>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default ProspectorSection;