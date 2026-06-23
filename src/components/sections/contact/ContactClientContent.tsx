"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Share2, HelpCircle } from "lucide-react";

import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const contactIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Phone,
    Mail,
    MapPin,
    Share2,
    
    Facebook: FaFacebook,
    Linkedin: FaLinkedin,
    Twitter: FaTwitter,
    Instagram: FaInstagram,
    Youtube: FaYoutube,
    Whatsapp: FaWhatsapp,

    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp
};

interface ContactClientContentProps {
    contactHero: { badge: string; title: string; desc: string };
    contactInfo: Array<{ title: string; value: string; subValue?: string; icon: string }>;
    socialLinks: Array<{ name: string; url: string; icon: string }>;
}

export default function ContactClientContent({ contactHero, contactInfo, socialLinks }: ContactClientContentProps) {
    return (
        <div
            className="w-full min-h-screen text-white overflow-hidden font-sans select-none"
            style={{ direction: "rtl" }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 space-y-20">

                <section className="text-center space-y-6 pt-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary-gold/20 bg-secondary-gold/10 backdrop-blur-md mx-auto"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold animate-pulse" />
                        <span className="text-xs font-light text-secondary-gold tracking-wide">
                            {contactHero.badge}
                        </span>
                    </motion.div>

                    <h1 className="text-4xl  sm:text-5xl leading-snug pt-2 font-black">
                        {contactHero.title}
                    </h1>

                    <p className="text-sm sm:text-base text-white/70 font-light leading-7">
                        {contactHero.desc}
                    </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {contactInfo.map((info, index) => {
                                const InfoIcon = contactIconMap[info.icon] || HelpCircle;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="card flex gap-4 items-center"
                                    >
                                        <div className="p-3 rounded-xl bg-brand-primary border border-secondary-gold/20 text-secondary-gold shrink-0">
                                            <InfoIcon size={20} />
                                        </div>

                                        <div className="space-y-1 text-right">
                                            <h4 className="text-xs text-white/50 font-light">
                                                {info.title}
                                            </h4>

                                            <p className="text-sm font-semibold text-white/90 select-text">
                                                {info.value}
                                            </p>

                                            {info.subValue && (
                                                <p className="text-xs text-white/60 font-light select-text">
                                                    {info.subValue}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="card">
                            <h3 className="text-sm font-bold text-right mb-4">
                                القنوات والمنصات الرسمية
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social, index) => {
                                    const SocialIcon = contactIconMap[social.icon] || HelpCircle;

                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-brand-primary border border-white/10 text-xs text-white/70 hover:border-secondary-gold/30 hover:text-secondary-gold transition-all duration-300"
                                        >
                                            <SocialIcon size={16} />
                                            <span>{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}