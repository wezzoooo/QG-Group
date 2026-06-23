// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle2, Quote } from "lucide-react";
// import Hero from "@/components/sections/hero/Hero";
// import ContactButton from "@/components/buttons/ContactButton";
// import { competitiveEdges, consultingSuiteDocs, coreConcepts, ecosystemServices, metrics } from "@/data/home";


// export default function HomePage() {
//     return (
//         <main className="bg-[#0F1F33] text-white min-h-screen overflow-hidden font-sans selection:bg-[#d4af37]/30 selection:text-[#d4af37]" style={{ direction: "rtl" }}>
//             {/* 1. Hero Section */}
//             <Hero />

//             {/* Grid Pattern Global Spacer Background */}
//             <div className="relative w-full">
//                 <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

//                 <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-32 pb-32">

//                     {/* 2. Trust & Authority Metrics Section */}
//                     <section className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-30">
//                         {metrics.map((metric, idx) => (
//                             <motion.div
//                                 key={metric.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                                 className="rounded-[20px] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl p-6 text-right relative group hover:border-[#d4af37]/20 transition-all duration-300"
//                             >
//                                 <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] mb-2 drop-shadow-[0_4px_10px_rgba(212,175,55,0.1)]">
//                                     {metric.title}
//                                 </div>
//                                 <p className="text-xs sm:text-sm text-white/50 font-light leading-6">
//                                     {metric.desc}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </section>

//                     {/* 3. Corporate Core Section (About + Concept) */}
//                     <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10">
//                         <motion.div
//                             initial={{ opacity: 0, x: 40 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8 }}
//                             className="lg:col-span-7 space-y-6 text-right"
//                         >
//                             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4af37]/10 bg-[#d4af37]/5 backdrop-blur-md">
//                                 <Award size={14} className="text-[#d4af37]" />
//                                 <span className="text-xs font-light text-[#d4af37] tracking-wide">مَن نحن</span>
//                             </div>

//                             <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400 leading-tight">
//                                 لا نمنحك حلولاً جاهزة.. <br />
//                                 <span className="text-2xl sm:text-3xl font-medium text-[#d4af37]">بل نصمم "نظام حياة" لشركتك</span>
//                             </h2>

//                             <p className="text-sm sm:text-base text-white/60 font-light leading-8 max-w-2xl">
//                                 في سوق متسارع، الأفكار وحدها لا تكفي. نحن في قريطنة جروب ندمج الرؤية الأكاديمية الصارمة بالخبرة التنفيذية الواقعية. لا نقدم استشارات عابرة، بل نمخر عباب التحديات معك لنصنع هياكل مؤسسية مرنة تتصدر المشهد التنافسي وتدوم عبر الأجيال.
//                             </p>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8 }}
//                             className="lg:col-span-5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md border border-white/[0.04] rounded-3xl p-6 sm:p-8 shadow-2xl relative group border-b-[#d4af37]/20"
//                         >
//                             <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#d4af37] text-slate-950 font-bold text-[10px] sm:text-xs px-4 py-1 rounded-full shadow-lg">
//                                 منصة الفكر والتنفيذ
//                             </div>
//                             <div className="space-y-6 text-right relative">
//                                 <Quote size={32} className="text-[#d4af37]/20 absolute -top-4 -right-4" />
//                                 <p className="text-white/80 italic text-sm sm:text-base leading-7 pt-4">
//                                     "النمو المستدام ليس وليد الصدفة، بل هو نتيجة هندسة إدارية دقيقة تجمع بين جرأة الفكرة وقوة النظام."
//                                 </p>
//                                 <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
//                                     <div>
//                                         <h4 className="text-white font-bold text-sm sm:text-base">د. محمد عبد الرحمن قريطنة</h4>
//                                         <p className="text-[11px] text-[#d4af37] font-light mt-0.5">المؤسس والرئيس التنفيذي</p>
//                                     </div>
//                                     <div className="h-10 w-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20 text-[#d4af37] font-serif font-bold text-sm">
//                                         QG
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </section>

//                     {/* 4. Vision & Mission Grid */}
//                     <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {coreConcepts.map((concept, idx) => {
//                             const Icon = concept.icon;
//                             return (
//                                 <motion.div
//                                     key={idx}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.6, delay: idx * 0.1 }}
//                                     className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex gap-5 items-start flex-row-reverse"
//                                 >
//                                     <div className="p-3 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/10 text-[#d4af37] shrink-0">
//                                         <Icon size={22} />
//                                     </div>
//                                     <div className="space-y-2 text-right flex-1">
//                                         <h3 className="text-lg sm:text-xl font-bold text-white">{concept.title}</h3>
//                                         <p className="text-xs sm:text-sm text-white/50 leading-7 font-light">
//                                             {concept.desc}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </section>

//                     {/* 5. Services Ecosystem Grid */}
//                     <section className="space-y-12">
//                         <div className="text-center space-y-4">
//                             <h2 className="text-2xl sm:text-4xl font-bold text-white">منظومة الخدمات الست المستدامة</h2>
//                             <p className="text-xs sm:text-base text-white/50 max-w-2xl mx-auto font-light">
//                                 منظومة نجاح متكاملة مصممة خصيصاً لتلبية متطلبات الأسواق الذكية والارتقاء بالأداء المؤسسي
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {ecosystemServices.map((service, index) => {
//                                 const Icon = service.icon;
//                                 return (
//                                     <motion.div
//                                         key={index}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 0.5, delay: index * 0.05 }}
//                                         className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] rounded-2xl p-6 text-right hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
//                                     >
//                                         <div className="space-y-4">
//                                             <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 w-fit group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/20 group-hover:text-[#d4af37] transition-all duration-300">
//                                                 <Icon size={20} />
//                                             </div>
//                                             <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
//                                                 {service.title}
//                                             </h3>
//                                             <p className="text-xs sm:text-sm text-white/50 leading-6 font-light">
//                                                 {service.desc}
//                                             </p>
//                                         </div>
//                                     </motion.div>
//                                 );
//                             })}
//                         </div>
//                     </section>

//                     {/* 6. Competitive Edge (Why Us) */}
//                     <section className="bg-gradient-to-r from-white/[0.02] via-white/[0.01] to-transparent border border-white/[0.03] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//                         <div className="lg:col-span-5 space-y-4 text-right">
//                             <h2 className="text-2xl sm:text-3xl font-bold text-white">ميثاق الشراكة: لماذا قريطنة جروب؟</h2>
//                             <p className="text-xs sm:text-sm text-white/50 font-light leading-7">
//                                 نحن نلتزم بصياغة فكر تنفيذي متكامل يحمي استثمارك ويضمن لك الاستقلال التام بإدارة قوية وذكية مبنية على حقائق الأسواق.
//                             </p>
//                         </div>

//                         <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-6">
//                             {competitiveEdges.map((edge, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     className="space-y-1 text-right border-r border-[#d4af37]/30 pr-4"
//                                 >
//                                     <div className="flex items-center gap-2 text-[#d4af37]">
//                                         <CheckCircle2 size={16} />
//                                         <h4 className="text-sm sm:text-base font-bold text-white">{edge.title}</h4>
//                                     </div>
//                                     <p className="text-xs text-white/50 leading-6 font-light">{edge.desc}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </section>

//                     {/* 7. Consulting Suite Docs Section */}
//                     <section className="space-y-12">
//                         <div className="text-center space-y-4">
//                             <h2 className="text-2xl sm:text-3xl font-bold text-white">حلقة الوصل ومستندات النجاح</h2>
//                             <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light">
//                                 أدواتك التنفيذية الذكية التي تضمن لك إدارة معيارية محترفة ومتابعة شاملة لشركتك
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//                             {consultingSuiteDocs.map((doc, idx) => {
//                                 const DocIcon = doc.icon;
//                                 return (
//                                     <motion.div
//                                         key={idx}
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         whileInView={{ opacity: 1, scale: 1 }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 0.4, delay: idx * 0.05 }}
//                                         className="p-4 rounded-xl border border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#d4af37]/20 text-center space-y-3 transition-all duration-300 group"
//                                     >
//                                         <div className="mx-auto w-fit p-3 rounded-lg bg-white/[0.03] text-white/40 group-hover:text-[#d4af37] group-hover:bg-[#d4af37]/5 transition-all duration-300">
//                                             <DocIcon size={18} />
//                                         </div>
//                                         <h4 className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
//                                             {doc.title}
//                                         </h4>
//                                     </motion.div>
//                                 );
//                             })}
//                         </div>
//                     </section>

//                     {/* 8. Interactive Call to Action - CTA */}
//                     <motion.section
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="rounded-3xl border border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden border-b-[#d4af37]/30 shadow-2xl"
//                     >
//                         <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
//                         <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#0a192f]/5 rounded-full blur-3xl pointer-events-none" />

//                         <h2 className="text-2xl sm:text-4xl font-extrabold text-white">شريكك الاستراتيجي في انتظارك</h2>
//                         <p className="text-xs sm:text-base text-white/50 font-light max-w-2xl mx-auto leading-7 sm:leading-8">
//                             كل فكرة تجارية تحمل بذور الريادة، لكنها تحتاج إلى الهيكلة والأدوات الصحيحة لتنمو وتستدام. احجز جلستك الاستشارية الأولى الآن وحوّل التحديات الإدارية إلى فرص واقعية ملموسة.
//                         </p>
//                         <div className="pt-2 flex justify-center w-full">
//                             <ContactButton />
//                         </div>
//                     </motion.section>

//                 </div>
//             </div>
//         </main>
//     );
// }

import Hero from "@/components/sections/home/Hero";
import MetricsSection from "@/components/sections/home/MetricsSection";
import CorporateCoreSection from "@/components/sections/home/CorporateCoreSection";
import CoreConceptsSection from "@/components/sections/home/CoreConceptsSection";
import ServicesEcosystemSection from "@/components/sections/home/ServicesEcosystemSection";
import CompetitiveEdgeSection from "@/components/sections/home/CompetitiveEdgeSection";
import ConsultingSuiteDocsSection from "@/components/sections/home/ConsultingSuiteDocsSection";
import CTASection from "@/components/sections/home/CTASection";

export default function HomePage() {
    return (
        <main className="text-white min-h-screen overflow-hidden font-sans selection:bg-secondary-gold/20 selection:text-secondary-gold">
            {/* 1. Hero Section (Server/Client inside) */}
            <Hero />

            {/* الحاوية العامة للمحتوى السفلي */}
            <div className="relative w-full">
                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-32 pb-32">
                    
                    {/* 2. Trust & Authority Metrics */}
                    <MetricsSection />

                    {/* 3. Corporate Core (About + Concept) */}
                    <CorporateCoreSection />

                    {/* 4. Vision & Mission Grid */}
                    <CoreConceptsSection />

                    {/* 5. Services Ecosystem Grid */}
                    <ServicesEcosystemSection />

                    {/* 6. Competitive Edge (Why Us) */}
                    <CompetitiveEdgeSection />

                    {/* 7. Consulting Suite Docs */}
                    <ConsultingSuiteDocsSection />

                    {/* 8. Interactive Call to Action - CTA */}
                    <CTASection />

                </div>
            </div>
        </main>
    );
}