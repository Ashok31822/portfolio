import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400">Showcasing my latest work and experiments.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:bg-white/10 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="text-primary w-8 h-8" />
                                <div className="flex gap-3">
                                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
