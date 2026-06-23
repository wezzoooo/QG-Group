"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent left-1/2 -translate-x-1/2" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent top-1/2 -translate-y-1/2" />
        
        <motion.div
          animate={{ 
            scale: [0.95, 1.05, 0.95],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] border border-secondary-gold/20 rounded-full pointer-events-none"
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i) * 60, 0],
              y: [0, Math.cos(i) * 60, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-secondary-gold rounded-full blur-[0.5px]"
            style={{
              top: `${40 + Math.random() * 20}%`,
              left: `${40 + Math.random() * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center text-center z-10 max-w-xl px-8">
        
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] tracking-[0.4em] font-extralight text-secondary-gold/60 uppercase flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] px-4 py-1.5 rounded-full backdrop-blur-md"
          >
            <span className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
            Error 404
          </motion.div>
        </div>

        <div className="relative mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-black bg-gradient-to-b from-white via-secondary-gold to-amber-900 bg-clip-text text-transparent leading-none select-none tracking-tight py-2"
          >
            هذه الصفحة غير موجودة
          </motion.h1>
          <div className="absolute inset-0 bg-secondary-gold/10 blur-2xl filter -z-10 scale-90" />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-sm text-slate-300 font-extralight leading-relaxed max-w-md mb-12 tracking-wide"
        >
          لم نتمكن من العثور على الصفحة التي تبحث عنها.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-full overflow-hidden transition-all duration-500 hover:border-secondary-gold/40"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-secondary-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-amber-200/5 to-transparent" />

            <span className="relative z-10 text-xs tracking-widest text-slate-200 font-light group-hover:text-white transition-colors duration-300 flex items-center gap-3">
              العودة للصفحة الرئيسية
              <motion.span 
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-secondary-gold"
              >
                ←
              </motion.span>
            </span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}