// "use client";

// import { services, values, features } from "@/data/services";
// import { motion } from "framer-motion";
// import { Award, Target, Eye, CheckCircle2 } from "lucide-react";


// export default function ConsultingInstitution() {
//     return (
//         <div className="relative w-full min-h-screen bg-[#030712] text-white overflow-hidden font-sans select-none" style={{ direction: "rtl" }}>

//             <div className="absolute inset-0 z-0 bg-radial from-[#0a192f] via-[#050c18] to-[#030712] to-90% pointer-events-none" />
//             <div
//                 className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"
//                 style={{
//                     maskImage: "radial-gradient(circle at center, white 30%, transparent 85%)",
//                     WebkitMaskImage: "radial-gradient(circle at center, white 30%, transparent 85%)"
//                 }}
//             />

//             <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 space-y-32">

//                 <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10">
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="lg:col-span-7 space-y-6 text-right"
//                     >
//                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4af37]/10 bg-[#d4af37]/5 backdrop-blur-md">
//                             <Award size={14} className="text-[#d4af37]" />
//                             <span className="text-xs font-light text-[#d4af37] tracking-wide">نبذة عن المؤسسة</span>
//                         </div>

//                         <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400 leading-tight">
//                             قريطنة جروب <br />
//                             <span className="text-2xl sm:text-3xl font-medium text-slate-300">لتطوير الأعمال وهيكلة الشركات</span>
//                         </h2>

//                         <p className="text-base sm:text-lg text-slate-400 font-light leading-8 max-w-3xl">
//                             تعد مجموعة قريطنة بيت خبرة استشاري رائد، وشريكاً استراتيجياً موثوقاً للشركات الطموحة.
//                             نحن متخصصون في صياغة الحلول المبتكرة والمستدامة في مجالات تطوير الأعمال، هيكلة المؤسسات، وإعداد الدراسات الاقتصادية وخطط العمل.
//                         </p>

//                         <p className="text-sm sm:text-base text-slate-400/80 font-light leading-7 max-w-3xl border-r-2 border-[#d4af37]/30 pr-4">
//                             تأسست المجموعة على يد د. محمد عبد الرحمن قريطنة لتكون منصة تجمع بين الفكر الأكاديمي الرصين والخبرة الميدانية العميقة،
//                             من خلال فريق من الخبراء ذوي البصمة الواقعية في الإدارة والتخطيط، منطلقةً من رؤية علمية شاملة تعتمد على البحث والتطوير كركيزة أساسية للتنافسية.
//                         </p>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="lg:col-span-5 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-md border border-white/[0.05] rounded-3xl p-6 sm:p-8 shadow-2xl relative group border-b-[#d4af37]/20"
//                     >
//                         <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#d4af37] text-slate-950 font-bold text-xs px-4 py-1 rounded-full shadow-lg">
//                             شريكك الاستراتيجي من الفكرة إلى الريادة
//                         </div>
//                         <div className="space-y-6 text-right">
//                             <span className="text-5xl text-[#d4af37]/20 font-serif block">“</span>
//                             <p className="text-slate-300 italic text-sm sm:text-base leading-7 -mt-4">
//                                 في عالم الأعمال المعاصر، لم يعد النجاح وليد الصدفة، بل هو نتيجة هندسة دقيقة تجمع بين الرؤية الاستراتيجية والقدرة على التنفيذ الواقعي.
//                                 لقد أسسنا المجموعة لتكون بيتاً للخبرة يسد الفجوة بين النظريات الأكاديمية والتحديات الميدانية. أؤمن أن قوة أي كيان اقتصادي تكمن في قدرته على تحقيق الكفاءة في إدارة موارده والفاعلية في الوصول لنتائجه.
//                             </p>
//                             <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
//                                 <div>
//                                     <h4 className="text-white font-bold text-base">د. محمد عبد الرحمن قريطنة</h4>
//                                     <p className="text-xs text-[#d4af37] font-light mt-0.5">المؤسس والرئيس التنفيذي</p>
//                                 </div>
//                                 <div className="h-10 w-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20 text-[#d4af37] font-bold text-sm">
//                                     QG
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </section>

//                 <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex gap-5 items-start"
//                     >
//                         <div className="p-3 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/10 text-[#d4af37] shrink-0">
//                             <Eye size={24} />
//                         </div>
//                         <div className="space-y-2 text-right">
//                             <h3 className="text-xl font-bold text-white">الرؤية الاستراتيجية</h3>
//                             <p className="text-sm text-slate-400 leading-7 font-light">
//                                 أن نصبح المرجع الإقليمي الأول في تطوير الأعمال وصياغة مستقبل الاستثمار، عبر بناء مؤسسات مرنة ومبتكرة يُحتذى بها في التحول الرقمي والحوكمة، لتتصدر المشهد التنافسي في بيئة أعمال متغيرة.
//                             </p>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex gap-5 items-start"
//                     >
//                         <div className="p-3 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/10 text-[#d4af37] shrink-0">
//                             <Target size={24} />
//                         </div>
//                         <div className="space-y-2 text-right">
//                             <h3 className="text-xl font-bold text-white">الرسالة المؤسسية</h3>
//                             <p className="text-sm text-slate-400 leading-7 font-light">
//                                 تمكين المستثمرين أفراداً ومؤسسات من تحقيق النمو المستدام بإدارة مشاريعهم وفق أعلى معايير الكفاءة بأقل هدر، وأفضل فاعلية بأعل أرباح، عبر خدمات استشارية وتدريبية عالية الجودة ترتكز على الابتكار.
//                             </p>
//                         </div>
//                     </motion.div>
//                 </section>

//                 <section className="space-y-12">
//                     <div className="text-center space-y-4">
//                         <h2 className="text-3xl sm:text-4xl font-bold text-white">باقة خدماتنا المتكاملة</h2>
//                         <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-light">
//                             منظومة النجاح والاستدامة المصممة خصيصاً لتلبية متطلبات السوق والارتقاء بأداء الشركات
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {services.map((service, index) => {
//                             const IconComponent = service.icon;
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.05 }}
//                                     className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-6 text-right hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
//                                 >
//                                     <div className="space-y-4">
//                                         <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 w-fit group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/20 group-hover:text-[#d4af37] transition-all duration-300">
//                                             <IconComponent size={20} />
//                                         </div>
//                                         <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">{service.title}</h3>
//                                         <p className="text-xs sm:text-sm text-slate-400 leading-6 font-light">{service.desc}</p>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </section>

//                 <section className="space-y-12">
//                     <div className="text-center space-y-4">
//                         <h2 className="text-3xl sm:text-4xl font-bold text-white">قيمنا الجوهرية</h2>
//                         <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-light">
//                             المبادئ الحاكمة لجميع أعمالنا الاستشارية والتنفيذية
//                         </p>
//                     </div>

//                     <div className="flex flex-wrap justify-center gap-6">
//                         {values.map((val, index) => {
//                             const IconComponent = val.icon;
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, scale: 0.95 }}
//                                     whileInView={{ opacity: 1, scale: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.4, delay: index * 0.05 }}
//                                     className="w-full sm:w-[280px] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.03] rounded-xl p-5 text-right space-y-3"
//                                 >
//                                     <div className="text-[#d4af37] w-fit">
//                                         <IconComponent size={18} />
//                                     </div>
//                                     <h4 className="text-base font-bold text-white">{val.title}</h4>
//                                     <p className="text-xs text-slate-400 leading-5 font-light">{val.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </section>

//                 <section className="bg-gradient-to-r from-white/[0.02] via-white/[0.01] to-transparent border border-white/[0.04] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//                     <div className="lg:col-span-5 space-y-4 text-right">
//                         <h2 className="text-3xl font-bold text-white">لماذا تختار قريطنة جروب؟</h2>
//                         <p className="text-sm sm:text-base text-slate-400 font-light leading-7">
//                             نحن لا نقدم حلولاً نمطية، بل نصمم أنظمة حياة مؤسسية تضمن نمو وحماية الاستثمارات في قطاعات استراتيجية متنوعة تلبي تطلعات الأجيال القادمة وتدعم ريادة أعمالكم.
//                         </p>
//                     </div>

//                     <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         {features.map((feat, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 className="space-y-2 text-right border-r border-white/[0.08] pr-4"
//                             >
//                                 <div className="flex items-center gap-2 text-[#d4af37]">
//                                     <CheckCircle2 size={16} />
//                                     <h4 className="text-base font-bold text-white">{feat.title}</h4>
//                                 </div>
//                                 <p className="text-xs text-slate-400 leading-5 font-light">{feat.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//             </div>
//         </div>
//     );
// }

import { Metadata } from "next";
import { services, values, features } from "@/data/services";
import ConsultingClientContent from "@/components/consulting/ConsultingClientContent";

export const metadata: Metadata = {
    title: "قريطنة جروب | لتطوير الأعمال وهيكلة الشركات",
    description: "بيت خبرة استشاري رائد وشريك استراتيجي في صياغة الحلول المبتكرة والمستدامة لتطوير الأعمال، هيكلة المؤسسات، وإعداد الدراسات الاقتصادية تحت إشراف د. محمد عبد الرحمن قريطنة.",
    keywords: ["قريطنة جروب", "هيكلة الشركات", "تطوير الأعمال", "استشارات اقتصادية", "دكتور محمد قريطنة"],
};

export default function ConsultingPage() {
    const sanitizedServices = services.map(service => {
        const iconObj = service.icon as any;
        return {
            ...service,
            icon: typeof service.icon === 'function' || typeof service.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "Briefcase")
                : service.icon
        };
    });

    const sanitizedValues = values.map(val => {
        const iconObj = val.icon as any;
        return {
            ...val,
            icon: typeof val.icon === 'function' || typeof val.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "ShieldCheck")
                : val.icon
        };
    });

    return (
        <ConsultingClientContent
            services={sanitizedServices}
            values={sanitizedValues}
            features={features}
        />
    );
}