
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, CalendarPlus, UserCheck, Bot, FileText, Repeat } from 'lucide-react';

const CloserSection = () => {
    const workflowSteps = [
        {
            icon: Bot,
            title: "Lead Ingestion & Enrichment",
            description: "A new lead from The Prospector enters the system. The AI automatically enriches the data, verifying contact details and sourcing additional company info."
        },
        {
            icon: PhoneCall,
            title: "Initial Automated Contact",
            description: "The AI agent places an initial call, introducing DX Energy and asking key qualifying questions based on a pre-defined script."
        },
        {
            icon: MessageSquare,
            title: "Multi-Channel Follow-Up",
            description: "If no answer, the AI sends a personalized SMS and email. It continues a 'smart' follow-up sequence over several days, varying times and messages."
        },
        {
            icon: FileText,
            title: "Objection Handling & Qualification",
            description: "The AI is trained to understand and respond to common objections (e.g., 'not interested'). It scores the lead based on their responses."
        },
        {
            icon: CalendarPlus,
            title: "Automated Meeting Booking",
            description: "Once a lead is qualified and shows interest, the AI agent accesses your team's calendar and offers available slots to book a meeting instantly."
        },
        {
            icon: UserCheck,
            title: "Seamless Human Handoff",
            description: "A meeting is on the calendar, and your human closer receives a full transcript and summary of the AI's conversation. They are fully prepped to close the deal."
        }
    ];

    return (
        <section id="closer" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        The Closer: <span className="text-gradient">Automated Engagement Engine</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        This isn't just a dialer; it's a 24/7 sales agent that speaks, texts, qualifies, and books meetings. Here's how it turns a raw lead into a qualified appointment.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-start gap-6 md:gap-8 mb-12 last:mb-0"
                        >
                            <div className="mt-1 flex-shrink-0 bg-purple-900/50 rounded-full p-4 glow-effect">
                                <step.icon className="w-8 h-8 text-purple-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-lg text-white/80">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CloserSection;
