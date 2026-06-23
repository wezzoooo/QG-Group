"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { 
    Building2, 
    Lightbulb, 
    Briefcase, 
    Users, 
    Target, 
    Clock,
    TrendingUp,
    GitMerge,
    BarChart3,
    Cpu,
    GraduationCap,
    HelpCircle 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Building2,
    Lightbulb,
    Briefcase,
    Users,
    ShieldCheck,
    Target,
    Clock,
    TrendingUp,
    GitMerge,
    BarChart3,
    Cpu,
    GraduationCap
};

interface SectorItem {
    title: string;
    slug: string;
    desc: string;
    icon: string; 
    features: string[];
}

interface ValueItem {
    title: string;
    desc: string;
    icon: string;
}

interface FeatureItem {
    title: string;
    desc: string;
}

interface ServicesClientContentProps {
    sectors: SectorItem[];
    values: ValueItem[];
    features: FeatureItem[];
}

export default function ServicesClientContent({ sectors, values, features }: ServicesClientContentProps) {
    return (
        <div className="w-full min-h-screen text-white overflow-hidden font-sans select-none">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 space-y-32">
                
                {/* Hero Section */}
                <section className="text-center space-y-6 pt-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary-gold/20 bg-secondary-gold/10 backdrop-blur-md"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold animate-pulse" />
                        <span className="text-xs font-light text-secondary-gold tracking-wider">
                            منظومة خدماتنا الاستراتيجية
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-slate-400"
                    >
                        حلول متكاملة تقود <br /> مسيرة التنمية المستدامة
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-lg text-white/70 font-light leading-8 max-w-3xl mx-auto"
                    >
                        نقدم في قريطنة جروب حزمة من الخدمات والحلول التنموية المترابطة التي تغطي قطاعات الاستثمار، تطوير المشاريع، واكتشاف الفرص، لضمان استدامة النمو وتكامل الأدوار.
                    </motion.p>
                </section>

                {/* Main Sectors Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {sectors.map((sector, index) => {
                        const IconComponent = iconMap[sector.icon] || HelpCircle;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card flex flex-col justify-between relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-32 h-32 bg-secondary-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3.5 rounded-2xl bg-brand-primary border border-secondary-gold/20 text-secondary-gold shrink-0">
                                            <IconComponent size={24} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-secondary-gold transition-colors duration-300">
                                                {sector.title}
                                            </h3>
                                            <p className="text-xs text-secondary-gold/80 font-light mt-0.5">
                                                قطاع الأعمال والتطوير
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-white/70 leading-7 font-light pr-2">
                                        {sector.desc}
                                    </p>

                                    <div className="pt-4 border-t border-white/10 space-y-3">
                                        <p className="text-xs font-semibold text-white/60 tracking-wide">
                                            أبرز مجالات العمل:
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {sector.features.map((feat, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-2 text-white/80">
                                                    <ChevronLeft size={14} className="text-secondary-gold" />
                                                    <span className="text-xs font-light">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
                                    <Link
                                        href={`/services/${sector.slug}`}
                                        className="inline-flex items-center gap-2 text-xs font-medium text-secondary-gold hover:text-white transition-colors group/btn"
                                    >
                                        <span>المزيد حول الخدمة</span>
                                        <ArrowLeft size={14} className="transform group-hover/btn:-translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </section>

                {/* Core Values Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold">ركائز تميزنا التشغيلي</h2>
                        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light">
                            المبادئ الثابتة التي تحكم كافة خدماتنا الاستشارية والتنموية
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((val, index) => {
                            const ValueIconComponent = iconMap[val.icon] || HelpCircle;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card text-right space-y-4 group"
                                >
                                    <div className="text-secondary-gold bg-brand-primary border border-secondary-gold/20 w-fit p-2.5 rounded-xl">
                                        <ValueIconComponent size={20} />
                                    </div>
                                    <h4 className="text-lg font-bold">{val.title}</h4>
                                    <p className="text-xs sm:text-sm text-white/70 leading-6 font-light">{val.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Features Section */}
                <section className="card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-4 text-right">
                        <h2 className="text-3xl font-bold">لماذا قريطنة جروب؟</h2>
                        <p className="text-sm sm:text-base text-white/70 font-light leading-7">
                            نحن لا نقدم مجرد استشارات عابرة، بل نصمم أصولاً وقدرات اقتصادية تدعم وتضمن التنافسية وتصنع بصمة تنموية فريدة.
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {features.map((feat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="flex flex-col gap-1 border-r border-white/10 pr-4 py-1 hover:border-secondary-gold/40 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-secondary-gold shrink-0" />
                                    <h5 className="text-sm font-semibold text-white">{feat.title}</h5>
                                </div>
                                <p className="text-xs text-white/70 font-light pr-6">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}