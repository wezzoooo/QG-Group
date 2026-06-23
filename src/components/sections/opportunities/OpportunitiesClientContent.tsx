"use client";

import { motion } from "framer-motion";
import { 
    ChevronLeft, 
    ArrowLeft, 
    ShieldCheck, 
    HelpCircle,
    Briefcase,
    TrendingUp,
    Sprout,
    Building2,
    Factory,
    LineChart,
    PieChart,
    Coins,
    Handshake
} from "lucide-react";
import Link from "next/link";

// خريطة أيقونات لوسيد الخاصة بصفحة استكشاف وتطوير الفرص
const opportunitiesIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Briefcase,
    TrendingUp,
    Sprout,
    Building2,
    Factory,
    LineChart,
    PieChart,
    Coins,
    Handshake,
    ChartLine: LineChart // احتياطاً للاسم المذكور في رسالة الخطأ
};

interface MainCategoryItem {
    title: string;
    subtitle: string;
    desc: string;
    slug: string;
    icon: string; // تم تحويلها لنص قادم من السيرفر
    items: string[];
}

interface SectorItem {
    title: string;
    desc: string;
    icon: string; // تم تحويلها لنص قادم من السيرفر
}

interface OpportunitiesClientContentProps {
    oppsHero: { badge: string; title: string; desc1: string; desc2: string };
    mainCategories: MainCategoryItem[];
    whyChooseUs: { title: string; desc: string; features: string[] };
    sectorsData: SectorItem[];
}

export default function OpportunitiesClientContent({
    oppsHero,
    mainCategories,
    whyChooseUs,
    sectorsData
}: OpportunitiesClientContentProps) {
    return (
        <div className="relative w-full min-h-screen text-white">
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 space-y-32">

                {/* Hero Section */}
                <section className="text-center space-y-6 pt-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary-gold/15 bg-secondary-gold/5 backdrop-blur-md mx-auto"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold animate-pulse" />
                        <span className="text-xs font-light text-secondary-gold tracking-wide">{oppsHero.badge}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-slate-400 leading-tight"
                    >
                        {oppsHero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-lg text-slate-400 font-light leading-8 max-w-3xl mx-auto"
                    >
                        {oppsHero.desc1}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-sm sm:text-base text-slate-500 font-light max-w-2xl mx-auto border-t border-white/5 pt-4"
                    >
                        {oppsHero.desc2}
                    </motion.p>
                </section>

                {/* التصنيفات الرئيسية للفرص */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {mainCategories.map((category, index) => {
                        const IconComponent = opportunitiesIconMap[category.icon] || HelpCircle;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card backdrop-blur-sm group flex flex-col justify-between overflow-hidden"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 group-hover:bg-secondary-gold/10 group-hover:border-secondary-gold/30 group-hover:text-secondary-gold transition-all duration-300 shrink-0">
                                                <IconComponent size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-secondary-gold transition-colors duration-300">{category.title}</h3>
                                                <p className="text-xs text-secondary-gold/70 font-light mt-0.5">{category.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-400 leading-7 font-light">
                                        {category.desc}
                                    </p>

                                    <div className="pt-4 border-t border-white/[0.04] space-y-2">
                                        {category.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="flex items-center gap-2 text-slate-300">
                                                <ChevronLeft size={14} className="text-secondary-gold/60" />
                                                <span className="text-xs sm:text-sm font-light">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-white/5 flex justify-end">
                                    <Link
                                        href={`/services/opportunities/${category.slug}`}
                                        className="inline-flex items-center gap-2 text-xs font-medium text-secondary-gold hover:text-white transition-colors group/btn"
                                    >
                                        <span>استكشف هذه الفرص بالتفصيل</span>
                                        <ArrowLeft size={14} className="transform group-hover/btn:-translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </section>

                {/* قطاعات الفرص */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-white">قطاعات استكشاف وتطوير الفرص</h2>
                        <p className="text-sm text-slate-400 max-w-xl mx-auto font-light">
                            نركز جهودنا الاستراتيجية في المحركات الرئيسية للنمو الاقتصادي والتنمية المستدامة
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {sectorsData.map((sector, index) => {
                            const SectorIconComponent = opportunitiesIconMap[sector.icon] || HelpCircle;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="card p-6 space-y-4 hover:border-secondary-gold/40 flex flex-col justify-between group"
                                >
                                    <div className="space-y-3">
                                        <div className="text-secondary-gold bg-secondary-gold/5 w-fit p-2 rounded-xl border border-secondary-gold/10 group-hover:bg-secondary-gold/10 transition-colors duration-300">
                                            <SectorIconComponent size={18} />
                                        </div>
                                        <h4 className="text-base font-bold text-white group-hover:text-secondary-gold transition-colors duration-300">{sector.title}</h4>
                                        <p className="text-xs text-slate-400 leading-5 font-light">{sector.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* لماذا نحن؟ */}
                <section className="card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-4">
                        <h2 className="text-3xl font-bold text-white">{whyChooseUs.title}</h2>
                        <p className="text-sm sm:text-base text-slate-400 font-light leading-7">
                            {whyChooseUs.desc}
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {whyChooseUs.features.map((feat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="flex items-center gap-3 border-r border-white/[0.06] pr-4 py-1 hover:border-secondary-gold/40 transition-colors"
                            >
                                <ShieldCheck size={16} className="text-secondary-gold shrink-0" />
                                <p className="text-sm text-slate-300 font-light">{feat}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* تذييل الصفحة / الخاتمة */}
                <section className="card border-b-secondary-gold/30 p-8 sm:p-12 text-center max-w-5xl mx-auto overflow-hidden">
                    <div className="space-y-6 relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">كيف تبدأ معنا؟</h2>
                        <p className="text-sm sm:text-base text-slate-300 font-light leading-8 max-w-3xl mx-auto opacity-85">
                            إذا كنت تبحث عن فرصة استثمارية، أو ترغب في بناء شراكة استراتيجية، أو تمتلك مشروعًا يحتاج إلى الدعم والتطوير، فإن فريقنا مستعد لمساعدتك في استكشاف الفرص المناسبة وتحويل الطموحات إلى نتائج ملموسة.
                        </p>

                        <div className="pt-8 border-t border-white/[0.05] max-w-2xl mx-auto">
                            <p className="text-sm font-semibold text-secondary-gold tracking-wide mb-1">فرص اليوم... استثمارات الغد</p>
                            <p className="text-xs text-slate-400 font-light leading-6">
                                في قريطنة جروب نؤمن أن كل فرصة ناجحة تبدأ برؤية واضحة، وتكبر بالتخطيط السليم، وتتحول إلى قيمة مستدامة من خلال التنفيذ الفعّال والشراكات القوية. نواصل اكتشاف وتطوير الفرص التي تصنع مستقبلًا أكثر نموًا واستدامة للجميع.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}