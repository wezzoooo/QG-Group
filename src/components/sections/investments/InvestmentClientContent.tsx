"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, 
    HelpCircle,
    LineChart, 
    BarChart3, 
    PieChart, 
    Target, 
    Compass, 
    Eye, 
    Briefcase, 
    Shield, 
    TrendingUp, 
    Building2,
    Coins,
    Globe
} from "lucide-react";

// خريطة أيقونات لوسيد الخاصة بالمؤسسة الاستثمارية لترجمة النصوص إلى مكونات رندر
const investmentIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    LineChart,
    BarChart3,
    PieChart,
    Target,
    Compass,
    Eye,
    Briefcase,
    Shield,
    TrendingUp,
    Building2,
    Coins,
    Globe
};

interface MetricItem {
    title: string;
    value: string;
    desc: string;
    icon: string; // تم تحويلها لنص
}

interface VisionMissionItem {
    title: string;
    desc: string;
    icon: string; // تم تحويلها لنص
}

interface InvestmentFieldItem {
    title: string;
    desc: string;
    icon: string; // تم تحويلها لنص
}

interface InvestmentClientContentProps {
    institutionHero: { badge: string; title: string; desc1: string; desc2: string };
    investmentMetrics: MetricItem[];
    visionMission: VisionMissionItem[];
    investmentFields: InvestmentFieldItem[];
    investmentMethodology: string[];
}

export default function InvestmentClientContent({
    institutionHero,
    investmentMetrics,
    visionMission,
    investmentFields,
    investmentMethodology
}: InvestmentClientContentProps) {
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
                        <span className="text-xs font-light text-secondary-gold tracking-wide">{institutionHero.badge}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-slate-500 leading-tight"
                    >
                        {institutionHero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-lg text-slate-400 font-light leading-8 max-w-3xl mx-auto"
                    >
                        {institutionHero.desc1}
                    </motion.p>
                </section>

                {/* مقاييس الأرقام والاستثمار */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {investmentMetrics.map((metric, index) => {
                        const MetricIconComponent = investmentIconMap[metric.icon] || HelpCircle;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card p-8 text-center space-y-4 group hover:border-secondary-gold/20 transition-all duration-300"
                            >
                                <div className="text-secondary-gold bg-secondary-gold/5 w-fit p-2.5 rounded-full border border-secondary-gold/10 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <MetricIconComponent size={20} />
                                </div>
                                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 font-mono tracking-tight">
                                    {metric.value}
                                </div>
                                <h4 className="text-base font-bold text-slate-200">{metric.title}</h4>
                                <p className="text-xs text-slate-400 font-light leading-5">{metric.desc}</p>
                            </motion.div>
                        );
                    })}
                </section>

                {/* الرؤية والرسالة */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {visionMission.map((item, index) => {
                        const VisionIconComponent = investmentIconMap[item.icon] || HelpCircle;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-6 sm:p-8 flex gap-5 items-start hover:border-white/10 transition-colors"
                            >
                                <div className="p-3 rounded-xl bg-secondary-gold/5 border border-secondary-gold/10 text-secondary-gold shrink-0">
                                    <VisionIconComponent size={24} />
                                </div>
                                <div className="space-y-2 text-right">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-400 leading-7 font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </section>

                {/* مجالات عمل المؤسسة */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">مجالات عمل المؤسسة</h2>
                        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-light">
                            الركائز الاستراتيجية التي ندير من خلالها محافظنا الاستثمارية بذكاء وحوكمة
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {investmentFields.map((field, index) => {
                            const FieldIconComponent = investmentIconMap[field.icon] || HelpCircle;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="card p-6 text-right hover:border-secondary-gold/30 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div className="space-y-4">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:bg-secondary-gold/10 group-hover:border-secondary-gold/20 group-hover:text-secondary-gold transition-all duration-300 w-fit">
                                            <FieldIconComponent size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-secondary-gold transition-colors duration-300">{field.title}</h3>
                                        <p className="text-xs sm:text-sm text-slate-400 leading-6 font-light">{field.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* إدارة الأصول والامتثال */}
                <section className="card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-r from-white/[0.01] via-transparent to-transparent">
                    <div className="lg:col-span-5 space-y-4 text-right">
                        <h2 className="text-3xl font-bold text-white">إدارة الأصول والامتثال الصارم</h2>
                        <p className="text-sm sm:text-base text-slate-400 font-light leading-7">
                            نحن لا نعتمد على العوائد المؤقتة؛ بل نوظف منهجيات علمية تضمن سلامة أصول الشركاء والامتثال التام لأعلى معايير الحوكمة المالية.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {investmentMethodology.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="space-y-2 text-right border-r border-white/[0.08] pr-4 py-1 hover:border-secondary-gold/40 transition-colors"
                            >
                                <div className="flex items-start gap-2 text-secondary-gold">
                                    <CheckCircle2 size={16} className="shrink-0 mt-1" />
                                    <h4 className="text-xs sm:text-sm font-light text-slate-300 leading-relaxed">{method}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* الخاتمة والفوتر الداخلي */}
                <section className="card border-b-secondary-gold/20 p-8 sm:p-12 text-center relative overflow-hidden max-w-5xl mx-auto bg-gradient-to-b from-white/[0.01] to-transparent">
                    <div className="space-y-6 relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">لماذا المؤسسة الاستثمارية؟</h2>
                        <p className="text-sm sm:text-base text-slate-300 font-light leading-8 max-w-3xl mx-auto opacity-80">
                            {institutionHero.desc2} لأننا ننظر إلى الاستثمار باعتباره أداة للتنمية وخلق القيمة، وليس مجرد وسيلة لتحقيق العائد المالي التقليدي. لذلك نعمل على توظيف الخبرات والموارد لبناء استثمارات قوية ومستدامة تدعم النمو الاقتصادي وتحقق أثراً إيجابياً طويل المدى.
                        </p>

                        <div className="pt-6 border-t border-white/[0.05] max-w-xl mx-auto">
                            <p className="text-xs tracking-widest text-secondary-gold font-medium uppercase">قريطنة جروب // استثمار مسؤول... وأصول تنمو بثقة</p>
                            <p className="text-xs text-slate-400 font-light mt-2">نواصل تطوير وإدارة الأصول والاستثمارات برؤية واضحة تجمع بين الكفاءة التشغيلية، الاستدامة، وتحقيق القيمة المضافة.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}