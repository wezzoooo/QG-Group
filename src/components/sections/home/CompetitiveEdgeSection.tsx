"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { competitiveEdges } from "@/data/home";

export default function CompetitiveEdgeSection() {
    return (
        <section className="bg-gradient-to-r from-white/[0.02] via-white/[0.01] to-transparent border border-white/[0.03] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 text-right">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">ميثاق الشراكة: لماذا قريطنة جروب?</h2>
                <p className="text-xs sm:text-sm text-white/50 font-light leading-7">
                    نحن نلتزم بصياغة فكر تنفيذي متكامل يحمي استثمارك ويضمن لك الاستقلال التام بإدارة قوية وذكية مبنية على حقائق الأسواق.
                </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-6">
                {competitiveEdges.map((edge, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-1 text-right border-r border-secondary-gold/20 pr-4"
                    >
                        <div className="flex items-center gap-2 text-secondary-gold">
                            <CheckCircle2 size={16} />
                            <h4 className="text-sm sm:text-base font-bold text-white">{edge.title}</h4>
                        </div>
                        <p className="text-xs text-white/50 leading-6 font-light">{edge.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}