import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code, Server, Database, Globe, Cpu, Zap } from 'lucide-react';

const BentoGrid = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A glance at my technical arsenal and what I bring to the table.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]"
                >
                    {/* Main Skill Block */}
                    <motion.div variants={item} className="md:col-span-2 row-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Globe size={120} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Code className="text-primary" /> Web Development</h3>
                        <p className="text-gray-400 mb-6">Passionate about building responsive, accessible, and performant web applications using modern technologies.</p>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.slice(0, 4).map(skill => (
                                <span key={skill} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Secondary Blocks */}
                    <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 text-secondary">
                            <Zap />
                        </div>
                        <h4 className="font-bold text-lg mb-1">Quick Learner</h4>
                        <p className="text-sm text-gray-400">Adaptable to new tech stacks.</p>
                    </motion.div>

                    <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
                            <Cpu />
                        </div>
                        <h4 className="font-bold text-lg mb-1">Problem Solving</h4>
                        <p className="text-sm text-gray-400">Logical approach to coding.</p>
                    </motion.div>

                    {/* Remaining Skills List */}
                    <motion.div variants={item} className="md:col-span-3 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap gap-3 items-center">
                        <span className="text-gray-400 mr-4 font-medium">More Skills:</span>
                        {resumeData.skills.slice(4).map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full hover:bg-white/20 transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
