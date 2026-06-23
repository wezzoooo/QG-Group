"use client";

import { motion } from "framer-motion";
import { consultingSuiteDocs } from "@/data/home";

export default function ConsultingSuiteDocsSection() {
    return (
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">حلقة الوصل ومستندات النجاح</h2>
                <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light">
                    أدواتك التنفيذية الذكية التي تضمن لك إدارة معيارية محترفة ومتابعة شاملة لشركتك
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {consultingSuiteDocs.map((doc, idx) => {
                    const DocIcon = doc.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="p-4 rounded-xl border border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.03] hover:border-secondary-gold/20 text-center space-y-3 transition-all duration-300 group"
                        >
                            <div className="mx-auto w-fit p-3 rounded-lg bg-white/[0.03] text-white/40 group-hover:text-secondary-gold group-hover:bg-secondary-gold/5 transition-all duration-300">
                                <DocIcon size={18} />
                            </div>
                            <h4 className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                                {doc.title}
                            </h4>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}