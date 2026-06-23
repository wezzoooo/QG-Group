"use client";

import { motion } from "framer-motion";
import { ecosystemServices } from "@/data/home";

export default function ServicesEcosystemSection() {
    return (
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-white">منظومة الخدمات المستدامة</h2>
                <p className="text-xs sm:text-base text-white/50 max-w-2xl mx-auto font-light">
                    منظومة نجاح متكاملة مصممة خصيصاً لتلبية متطلبات الأسواق الذكية والارتقاء بالأداء المؤسسي
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ecosystemServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] rounded-2xl p-6 text-right hover:border-secondary-gold/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                        >
                            <div className="space-y-4">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 w-fit group-hover:bg-secondary-gold/10 group-hover:border-secondary-gold/20 group-hover:text-secondary-gold transition-all duration-300">
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-secondary-gold transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-white/50 leading-6 font-light">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}