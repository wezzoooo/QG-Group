// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { LayoutGrid, Award, Compass } from "lucide-react";
// import ContactButton from "@/components/buttons/ContactButton";

// const investmentSectors = [
//     "تطوير عقاري",
//     "استثمار زراعي",
//     "استشارات تنفيذية",
// ];

// export default function Hero() {
//     const [sectorIndex, setSectorIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSectorIndex(
//                 (prev) => (prev + 1) % investmentSectors.length
//             );
//         }, 3500);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative w-full min-h-screen overflow-hidden flex items-center py-24 sm:py-28 lg:pt-28 lg:pb-24 xl:py-20 bg-[#0F1F33]">
//             {/* <div
//                 className="absolute inset-0 z-0 bg-radial from-[#0a192f] via-[#050c18] to-[#030712] to-85%"
//             /> */}
//             <div
//                 className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:45px_45px]"
//                 style={{
//                     maskImage:
//                         "radial-gradient(circle at center, white 25%, transparent 80%)",
//                     WebkitMaskImage:
//                         "radial-gradient(circle at center, white 25%, transparent 80%)",
//                 }}
//             />

//             <div className="relative z-20 w-full mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-12 items-center">
//                 {/* Content */}
//                 <div className="xl:col-span-8 text-center xl:text-right flex flex-col items-center xl:items-start max-w-4xl mx-auto xl:mx-0">
//                     <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#d4af37]/10 bg-[#d4af37]/5 backdrop-blur-md mb-5 sm:mb-6">
//                         <Award size={14} className="text-[#d4af37]" />

//                         <span className="text-[10px] sm:text-xs font-light text-[#d4af37] tracking-wide">
//                             قريطنة جروب للاستثمار والتنمية المستدامة
//                         </span>
//                     </div>

//                     <h1 className="text-5xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.2] mb-5 sm:mb-6 min-h-[120px] sm:min-h-[150px] md:min-h-[190px]">
//                         قريطنة جروب
//                         <br />

//                         <span className="inline-flex flex-wrap justify-center xl:justify-start items-baseline gap-2 sm:gap-3 text-white font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4">
//                             للإستثمارات الذكية المستدامة

//                         </span>
//                         <br />(
//                         <span className="relative inline-flex items-baseline overflow-hidden h-[1.2em]">
//                             <AnimatePresence mode="wait">
//                                 <motion.span
//                                     key={sectorIndex}
//                                     initial={{ width: 0 }}
//                                     animate={{ width: "auto" }}
//                                     exit={{ width: 0 }}
//                                     transition={{
//                                         width: {
//                                             duration: 0.95,
//                                             ease: [0.25, 1, 0.5, 1],
//                                         },
//                                     }}
//                                     className="whitespace-nowrap inline-block text-[#d4af37] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[0_4px_12px_rgba(212,175,55,0.15)] select-none"
//                                     style={{
//                                         direction: "rtl",
//                                         overflow: "hidden",
//                                     }}
//                                 >
//                                     {investmentSectors[sectorIndex]}
//                                 </motion.span>
//                             </AnimatePresence>
//                         </span>)

//                     </h1>

//                     <p className="text-sm sm:text-base lg:text-lg text-white/60 font-light max-w-xl lg:max-w-3xl leading-7 sm:leading-8 mb-8 mx-auto xl:mx-0">
//                         رؤية استثمارية مستدامة ممتدة عبر قطاعات حيوية. ندمج
//                         رأس المال الذكي مع التخطيط الهندسي الصارم لتمكين
//                         مشروعات وطنية تُحدث أثراً حقيقياً وتدوم للأجيال
//                         القادمة.
//                     </p>

//                     <div className="flex flex-wrap items-center gap-4 justify-center xl:justify-start w-full">
//                         <ContactButton />
//                     </div>
//                 </div>

//                 {/* Card */}
//                 <div className="xl:col-span-4 flex justify-center xl:justify-end mt-2 xl:mt-0">
//                     <div className="w-full max-w-md xl:max-w-sm rounded-[24px] border border-white/[0.04] bg-white/[0.01] backdrop-blur-md p-5 sm:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-b-[#d4af37]/20">
//                         <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4">
//                             <span className="text-xs font-light text-white/40">
//                                 استراتيجية المجموعة 2026
//                             </span>

//                             <LayoutGrid
//                                 size={16}
//                                 className="text-white/20"
//                             />
//                         </div>

//                         <div className="space-y-4 text-right">
//                             <div className="flex gap-3 items-start flex-row-reverse">
//                                 <div className="p-2 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/10 text-[#d4af37] mt-0.5">
//                                     <Compass size={14} />
//                                 </div>

//                                 <div>
//                                     <h4 className="text-white font-medium text-sm sm:text-base mb-1">
//                                         تنوع الأصول الممنهج
//                                     </h4>

//                                     <p className="text-xs sm:text-sm text-white/50 font-light leading-6">
//                                         توزيع مدروس للاستثمارات في 6 ركائز
//                                         تنموية لتقليل المخاطر المباشرة وتحقيق
//                                         عوائد مستقرة وطويلة الأجل.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="pt-3 border-t border-white/[0.05] flex gap-3 items-start flex-row-reverse">
//                                 <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 mt-0.5">
//                                     <LayoutGrid size={14} />
//                                 </div>

//                                 <div>
//                                     <h4 className="text-white font-medium text-sm sm:text-base mb-1">
//                                         الاستدامة المؤسسية
//                                     </h4>

//                                     <p className="text-xs sm:text-sm text-white/50 font-light leading-6">
//                                         نلتزم بتوجيه المشاريع لتبني معايير
//                                         الحفاظ على البيئة واستخدام الطاقة
//                                         المتجددة كجزء لا يتجزأ من نمو أعمالنا.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

import ContactButton from "@/components/buttons/ContactButton";
import Logo from "@/components/Logos/Logo";

const investmentSectors = [
    "التطوير العقاري",
    "الاستثمار الزراعي",
    "الاستشارات التنفيذية",
];

export default function Hero() {
    const [sectorIndex, setSectorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSectorIndex(
                (prev) => (prev + 1) % investmentSectors.length
            );
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center py-24 sm:py-32">

            <div className="relative z-20 w-full mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* المحتوى */}
                    <div className="lg:col-span-7 text-center lg:text-right order-2 lg:order-1">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary-gold/20 bg-secondary-gold/5 backdrop-blur-md mb-6 sm:mb-8">
                            <Award
                                size={14}
                                className="text-secondary-gold"
                            />
                            <span className="text-xs font-medium  tracking-wide">
                                شريكك الاستراتيجي من الفكرة إلي الريادة
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.3] mb-6 sm:mb-8 tracking-tight">

                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary-gold to-secondary-gold/70">
                                قريطنة جروب
                            </span>

                            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/90 mt-3">
                                للمشروعات والاستثمارات الذكية المستدامة
                            </span>

                            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mt-3">
                                قطاعتنا المميزة: (
                                <span className="relative inline-flex items-center overflow-hidden align-middle">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={sectorIndex}
                                            initial={{ width: 0 }}
                                            animate={{ width: "auto" }}
                                            exit={{ width: 0 }}
                                            transition={{
                                                width: {
                                                    duration: 0.95,
                                                    ease: [0.25, 1, 0.5, 1],
                                                },
                                            }}
                                            className="
                    whitespace-nowrap
                    inline-block
                    text-secondary-gold
                    font-bold
                    drop-shadow-[0_4px_20px_rgba(212,175,55,0.2)]
                    py-1
                "
                                            style={{
                                                overflow: "hidden",
                                            }}
                                        >
                                            {investmentSectors[sectorIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                                )
                            </span>

                        </h1>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-300/80 font-light max-w-3xl leading-7 sm:leading-8 mb-10 mx-auto lg:mx-0 lg:mr-0">
                            خبرة في هندسة المشروعات، الفرص الاستثمارية، وتحويل الأفكار إلى واقع مؤسسي مستدام
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <ContactButton />
                        </div>

                    </div>

                    {/* اللوجو */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-secondary-gold/10 blur-[120px] rounded-full scale-125" />

                            <Logo
                                priority
                                className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[420px] h-auto animate-logo-shake"
                            />
                        </motion.div>
                    </div>

                </div>

            </div>

        </section>
    );
}