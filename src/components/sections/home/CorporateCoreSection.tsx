"use client";

import LogoIcon from "@/components/Logos/Logo-icon";
import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";

export default function CorporateCoreSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10">
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6 text-right"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary-gold/10 bg-secondary-gold/5 backdrop-blur-md">
                    <Award size={14} className="text-secondary-gold" />
                    <span className="text-xs font-light text-secondary-gold/90 tracking-wide">مَن نحن</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400 leading-tight">
                    لا نمنحك حلولاً جاهزة.. <br />
                    <span className="text-2xl sm:text-3xl font-medium text-secondary-gold">بل نصمم "نظام حياة" لشركتك</span>
                </h2>

                <p className="text-sm sm:text-base text-white/60 font-light leading-8 max-w-2xl">
                    في سوق متسارع، الأفكار وحدها لا تكفي. نحن في قريطنة جروب ندمج الرؤية الأكاديمية الصارمة بالخبرة التنفيذية الواقعية. لا نقدم استشارات عابرة، بل نمخر عباب التحديات معك لنصنع هياكل مؤسسية مرنة تتصدر المشهد التنافسي وتدوم عبر الأجيال.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md border border-white/[0.04] rounded-3xl p-6 sm:p-8 shadow-2xl relative group border-b-secondary-gold/10"
            >
                <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-secondary-gold text-neutral-900 font-bold text-[10px] sm:text-xs px-4 py-1 rounded-full shadow-lg">
                    كلمة المؤسس
                </div>
                <div className="space-y-6 text-right relative">
                    <Quote size={32} className="text-secondary-gold/5 absolute -top-4 -right-4" />
                    <p className="text-white/80 text-justify text-sm sm:text-base leading-7 pt-4">
                        "بخبرة تمتد لأكثر من عقدين في قيادة المشروعات الاستراتيجية، أؤمن أن الاستثمار الناجح هو مزيج من *الرؤية العلمية الصارمة، والخبرة الميدانية الواعية*.<br/> بصفتي رئيساً لمجلس إدارة 'قريطنة جروب'، أسعى دائماً لدمج المعرفة الأكاديمية العميقة بالتطبيق العملي المباشر، لنقدم نموذجاً استثمارياً يجمع بين دقة الأداء وذكاء الاستدامة.
نحن ننطلق في كافة أعمالنا من *منهجية إدارية وخطط استراتيجية دقيقة، تعتمد على تحقيق أعلى درجات الكفاءة في إدارة الموارد، وأقصى درجات الفاعلية في الوصول إلى النتائج*.<br/> هدفي الدائم هو نقل المؤسسات من مجرد أفكار إلى كيانات قيادية في السوق، عبر هيكلة إدارية تعظم العوائد وتضمن استدامة النجاح، لأكون بذلك شريكاً في بناء إرث مؤسسي يواكب تحديات المستقبل."
                    </p>
                    <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                        <div>
                            <h4 className="text-white text-center font-bold text-sm sm:text-base">
                            <span className="text-secondary-gold">دكتور</span><br/>
                            محمد عبدالرحمن قريطنة

                            </h4>
                            <p className="text-[11px] text-center text-secondary-gold font-light mt-0.5">المؤسس و رئيس مجلس الادارة</p>
                        </div>
                        <div className="relative overflow-hidden">
                            <LogoIcon className="w-15" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}