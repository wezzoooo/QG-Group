"use client";

import { motion } from "framer-motion";
import ContactButton from "@/components/buttons/ContactButton";

export default function CTASection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden border-b-secondary-gold/20 shadow-2xl"
        >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">شريكك الاستراتيجي في انتظارك</h2>
            <p className="text-xs sm:text-base text-white/50 font-light max-w-2xl mx-auto leading-7 sm:leading-8">
                كل فكرة تجارية تحمل بذور الريادة، لكنها تحتاج إلى الهيكلة والأدوات الصحيحة لتنمو وتستدام. احجز جلستك الاستشارية الأولى الآن وحوّل التحديات الإدارية إلى فرص واقعية ملموسة.
            </p>
            <div className="pt-2 flex justify-center w-full">
                <ContactButton />
            </div>
        </motion.section>
    );
}