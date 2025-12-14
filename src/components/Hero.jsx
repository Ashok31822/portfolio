import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resume';
import profileImage from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px] animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
                                Available for Work
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{resumeData.personalInfo.name}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0"
                        >
                            {resumeData.personalInfo.title}
                            <br />
                            <span className="text-base text-gray-500 mt-2 block">
                                {resumeData.careerObjective}
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                        >
                            <a
                                href="#projects"
                                className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                            >
                                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/resume.pdf"
                                className="px-8 py-3 rounded-full border border-gray-700 hover:bg-white/5 transition-colors flex items-center gap-2 font-medium"
                            >
                                Download CV <Download className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[2px] opacity-20 animate-pulse"></div>
                            <img
                                src={profileImage}
                                alt={resumeData.personalInfo.name}
                                className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl"
                            />
                            {/* Decorative circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 border border-white/5 rounded-full border-dashed z-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements (Optional 3D feel) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] w-12 h-12 border-2 border-primary/30 rounded-lg rotate-12 hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-[10%] w-16 h-16 border-2 border-secondary/30 rounded-full hidden lg:block"
            />
        </section>
    );
};

export default Hero;
