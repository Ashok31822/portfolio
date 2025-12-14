import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, Briefcase } from 'lucide-react';

const Timeline = () => {
    return (
        <section id="experience" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
                    <p className="text-gray-400">My academic journey and professional milestones.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

                    <div className="space-y-12">
                        {resumeData.education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content */}
                                <div className="flex-1 md:text-right">
                                    {index % 2 === 0 && (
                                        <div className="md:text-right">
                                            <span className="text-primary text-sm font-bold tracking-wider">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
                                            <p className="text-gray-400">{item.institution}</p>
                                            {item.grade && <p className="text-sm text-gray-500 mt-2">{item.grade}</p>}
                                        </div>
                                    )}
                                    {index % 2 !== 0 && ( /* Empty for alignment on mobile/desktop switch logic if needed, but flex handles order */
                                        <div className="md:hidden">
                                            {/* Mobile view duplication or handling? 
                               Actually with flex-row-reverse, the first child is the Content.
                               For index 0 (even), flex-row-reverse, so Content is on Left visually? No.
                               Flex-row-reverse: Right <-- Left. First child is Rightmost.
                               So for Even: Content is Right.
                               For Odd: Content is Left.
                               
                               Wait, let's simplify.
                               We want alternating sides.
                               The 'flex-1' div is the content.
                              */}
                                            <span className="text-primary text-sm font-bold tracking-wider">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
                                            <p className="text-gray-400">{item.institution}</p>
                                            {item.grade && <p className="text-sm text-gray-500 mt-2">{item.grade}</p>}
                                        </div>
                                    )}
                                    {/* Desktop Odd Content */}
                                    {index % 2 !== 0 && (
                                        <div className="hidden md:block text-left">
                                            <span className="text-primary text-sm font-bold tracking-wider">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
                                            <p className="text-gray-400">{item.institution}</p>
                                            {item.grade && <p className="text-sm text-gray-500 mt-2">{item.grade}</p>}
                                        </div>
                                    )}
                                </div>

                                {/* Dot */}
                                <div className="absolute left-[-8px] md:left-1/2 md:-ml-[8px] w-4 h-4 rounded-full bg-dark border-2 border-primary z-10">
                                    <div className="w-full h-full bg-primary/50 animate-ping rounded-full" />
                                </div>

                                {/* Spacer for other side */}
                                <div className="flex-1 hidden md:block">
                                    {index % 2 === 0 && (
                                        <div className="text-left md:pl-8 opacity-0">Placeholder</div>
                                    )}
                                </div>

                                {/* Mobile adjustment: if index is even/odd, we handled content above. 
                    Actually the logic above is a bit mixed.
                    Let's Refactor for clarity.
                */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
