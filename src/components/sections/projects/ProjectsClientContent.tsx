"use client";

import { motion } from "framer-motion";
import { 
    ShieldCheck, 
    ChevronLeft, 
    HelpCircle,
    Building2,
    Sprout,
    Factory,
    Briefcase,
    Globe,
    TrendingUp,
    Users,
    LineChart
} from "lucide-react";

// خريطة ترجمة الأسماء النصية إلى مكونات أيقونات لوسيد لصفحة المشاريع
const projectsIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    ShieldCheck,
    Building2,   // أيقونة العقارات / الإنشاءات المتوقعة
    Sprout,      // أيقونة الزراعة المتوقعة
    Factory,     // أيقونة الصناعة المتوقعة
    Briefcase,
    Globe,
    TrendingUp,
    Users,
    LineChart
};

interface ProjectCategoryItem {
    title: string;
    subtitle: string;
    desc: string;
    icon: string; // أصبحت الآن String صريح قادم من السيرفر
    fields: string[];
}

interface CoreValueItem {
    title: string;
    desc: string;
    icon: string; // أصبحت الآن String صريح قادم من السيرفر
}

interface ProjectsClientContentProps {
    projectCategories: ProjectCategoryItem[];
    coreValues: CoreValueItem[];
    whyUsFeatures: string[];
}

export default function ProjectsClientContent({
    projectCategories,
    coreValues,
    whyUsFeatures
}: ProjectsClientContentProps) {
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
                            مشاريع مجموعة قريطنة
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-slate-400"
                    >
                        استثمارات تصنع الأثر...
                        <br className="hidden sm:block" />
                        وتنمية تبني المستقبل
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-lg text-white/70 font-light leading-8 max-w-3xl mx-auto"
                    >
                        في قريطنة جروب، نؤمن أن الاستثمار الناجح لا يُقاس بالعائد المالي فقط، بل بالأثر المستدام الذي يتركه على الأفراد والمجتمعات والاقتصاد. لذلك نعمل على تطوير ودعم مشاريع استراتيجية تساهم في تحقيق النمو المستدام وخلق قيمة حقيقية للأجيال القادمة.
                    </motion.p>
                </section>

                {/* تصنيفات المشاريع والقطاعات الاستثمارية */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectCategories.map((category, index) => {
                        // جلب الأيقونة ديناميكياً من الخريطة بناءً على الاسم النصي المستلم
                        const IconComponent = projectsIconMap[category.icon] || HelpCircle;
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
                                                {category.title}
                                            </h3>
                                            <p className="text-xs text-secondary-gold/80 font-light mt-0.5">
                                                {category.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-white/70 leading-7 font-light pr-2">
                                        {category.desc}
                                    </p>

                                    <div className="pt-4 border-t border-white/10 space-y-3">
                                        <p className="text-xs font-semibold text-white/60 tracking-wide">
                                            أبرز مجالات العمل:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {category.fields.map((field, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-2 text-white/80">
                                                    <ChevronLeft size={14} className="text-secondary-gold" />
                                                    <span className="text-xs font-light">{field}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </section>

                {/* رؤيتنا في تطوير المشاريع والقيم */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold">رؤيتنا في تطوير المشاريع</h2>
                        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light">
                            نحرص على أن يكون كل مشروع جزءًا من رؤية أكبر تهدف إلى تحقيق التوازن الثلاثي المعياري
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => {
                            // جلب أيقونة القيم والمبادئ ديناميكياً
                            const IconComponent = projectsIconMap[value.icon] || HelpCircle;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card text-right space-y-4 hover:border-secondary-gold/20 transition-all duration-300 group"
                                >
                                    <div className="text-secondary-gold bg-brand-primary border border-secondary-gold/20 w-fit p-2.5 rounded-xl group-hover:scale-105 transition-transform">
                                        <IconComponent size={20} />
                                    </div>
                                    <h4 className="text-lg font-bold">{value.title}</h4>
                                    <p className="text-xs sm:text-sm text-white/70 leading-6 font-light">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* ميزات ومميزات مشاريع المجموعة */}
                <section className="card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-4 text-right">
                        <h2 className="text-3xl font-bold">لماذا مشاريع قريطنة جروب?</h2>
                        <p className="text-sm sm:text-base text-white/70 font-light leading-7">
                            نحن لا نطلق مشاريع استثمارية عابرة، بل نصمم أصولاً وقدرات اقتصادية تعزز التنافسية الإقليمية وتصنع بصمة تنموية فريدة على الأرض.
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {whyUsFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="flex items-center gap-3 border-r border-white/10 pr-4 py-1 hover:border-secondary-gold/40 transition-colors"
                            >
                                <ShieldCheck size={16} className="text-secondary-gold shrink-0" />
                                <p className="text-sm text-white/80 font-light">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* خاتمة */}
                <section className="text-center max-w-2xl mx-auto space-y-6 pt-6">
                    <h3 className="text-2xl font-bold">معًا نحو مستقبل أكثر استدامة</h3>
                    <p className="text-sm text-white/70 font-light leading-7">
                        نواصل العمل على تطوير مشاريع نوعية تواكب المتغيرات الاقتصادية وتلبي احتياجات المستقبل، واضعين الاستدامة والابتكار في صميم كل خطوة نخطوها.
                    </p>
                </section>

            </div>
        </div>
    );
}