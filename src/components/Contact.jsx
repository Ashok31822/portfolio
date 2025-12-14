import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark/50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400">Have a project in mind or just want to say hi?</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-300 font-medium">Email</h4>
                                <a href={`mailto:${resumeData.personalInfo.email}`} className="text-lg text-white hover:text-primary transition-colors">
                                    {resumeData.personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-300 font-medium">Phone</h4>
                                <a href={`tel:${resumeData.personalInfo.phone}`} className="text-lg text-white hover:text-primary transition-colors">
                                    {resumeData.personalInfo.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-300 font-medium">Location</h4>
                                <p className="text-lg text-white">
                                    {resumeData.personalInfo.location}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Hello..." />
                            </div>
                            <button type="button" className="w-full py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
