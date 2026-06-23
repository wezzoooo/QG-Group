"use client";

import { motion } from "framer-motion";

export default function TestLoaderPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      <div className="relative flex flex-col items-center gap-10 z-10">
        
        {/* الأنيميشن الحركي للشعار */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          
          <motion.div
            initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
            animate={{ 
              rotate: 360, 
              opacity: [0.4, 1, 0.4],
              scale: 1 
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
            }}
            className="absolute inset-0 border border-secondary-gold/40 rounded-sm"
          />

          <motion.div
            initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
            animate={{ 
              rotate: -315, 
              opacity: [0.2, 0.8, 0.2],
              scale: 1 
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
            }}
            className="absolute inset-2 border border-white/10 rounded-sm"
          />

          {/* النبضة الضوئية المركزية */}
          <motion.div 
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 bg-secondary-gold rounded-full blur-[1px]"
          />
        </div>

        {/* النصوص والعناوين */}
        <div className="flex flex-col items-center gap-4 text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-b from-amber-200 via-secondary-gold to-amber-900 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(116,91,4,0.15)] pb-1"
          >
            قريطنة جروب
          </motion.h1>

          {/* خط التحميل المتنقل */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent overflow-hidden relative">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.6, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="h-full w-24 bg-gradient-to-l from-transparent via-secondary-gold to-transparent absolute top-0"
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[10px] tracking-[0.15em] font-extralight text-amber-100/70"
          >
            للاستثمار والتنمية المستدامة
          </motion.span>
        </div>

      </div>
    </div>
  );
}