"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/home";

export default function MetricsSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-30">
            {metrics.map((metric, idx) => (
                <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="rounded-[20px] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl p-6 text-right relative group hover:border-secondary-gold/20 transition-all duration-300"
                >
                    <div className="text-2xl sm:text-3xl font-extrabold text-secondary-gold mb-2 drop-shadow-[0_4px_10px_rgba(212,175,55,0.15)]">
                        {metric.title}
                    </div>
                    <p className="text-xs sm:text-sm text-white/50 font-light leading-6">
                        {metric.desc}
                    </p>
                </motion.div>
            ))}
        </section>
    );
}