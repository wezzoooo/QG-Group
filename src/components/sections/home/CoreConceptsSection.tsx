"use client";

import { motion } from "framer-motion";
import { coreConcepts } from "@/data/home";

export default function CoreConceptsSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreConcepts.map((concept, idx) => {
                const Icon = concept.icon;
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex gap-5 items-start flex-row-reverse"
                    >
                        <div className="p-3 rounded-xl bg-secondary-gold/5 border border-secondary-gold/10 text-secondary-gold shrink-0">
                            <Icon size={22} />
                        </div>
                        <div className="space-y-2 text-right flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white">{concept.title}</h3>
                            <p className="text-xs sm:text-sm text-white/50 leading-7 font-light">
                                {concept.desc}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </section>
    );
}