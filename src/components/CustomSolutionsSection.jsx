import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Lightbulb, TrendingUp } from 'lucide-react';

const CustomSolutionsSection = () => {
    return (
        <section id="custom-solutions" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Expanding Horizons</h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Custom AI & Software Partnerships</h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        This proposal is just the beginning! We excel at crafting bespoke AI and software solutions, and we're eager to discuss your unique challenges and requirements for further optimization.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-effect rounded-2xl p-8 text-center"
                    >
                        <BrainCircuit className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                        <h3 className="text-2xl font-bold mb-3">Predictive AI & Analytics</h3>
                        <p className="text-white/80">
                            Beyond lead generation, we can implement predictive models for sales forecasting, customer behavior analysis, and market trend identification to give you a strategic edge.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-effect rounded-2xl p-8 text-center"
                    >
                        <TrendingUp className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                        <h3 className="text-2xl font-bold mb-3">Continuous Optimization & Support</h3>
                        <p className="text-white/80">
                            We offer ongoing analysis and refinement of all your digital workflows, ensuring your systems are always at peak performance, adapting to new market demands and maximizing ROI.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-effect rounded-2xl p-8 text-center"
                    >
                        <Lightbulb className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                        <h3 className="text-2xl font-bold mb-3">Bespoke Software Solutions</h3>
                        <p className="text-white/80">
                            Have a unique operational challenge or a groundbreaking idea? We're your full-stack development partner, ready to design, build, and scale any custom software solution you can imagine.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CustomSolutionsSection;