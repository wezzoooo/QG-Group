"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { CONTACT } from "@/data/whats-num";
export default function FloatingWhatsApp() {
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: 1,
                ease: "easeOut",
            }}
            className="fixed bottom-6 left-6 z-[9999]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group relative flex items-center"
            >
                {/* Tooltip */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-[72px]
                        top-1/2
                        -translate-y-1/2
                        whitespace-nowrap
                        rounded-full
                        border
                        border-white/10
                        bg-black/60
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        opacity-0
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                    "
                >
                    تواصل معنا
                </div>

                {/* Glow */}
                <div
                    className="
                        absolute
                        inset-0
                        rounded-full
                        bg-green-500/20
                        blur-xl
                        transition-all
                        duration-300
                        group-hover:scale-125
                    "
                />

                {/* Button */}
                <div
                    className="
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:border-green-500/40
                    "
                >
                    <FaWhatsapp
                        size={30}
                        className="
                            text-green-500
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    />
                </div>

                {/* Ping Effect */}
                <span
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-green-500/30
                        animate-ping
                    "
                />
            </a>
        </motion.div>
    );
}