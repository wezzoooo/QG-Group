// "use client";

// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// import { navigation } from "@/data/navigation";
// import MobileMenu from "./MobileMenu";
// import ContactButton from "@/components/buttons/ContactButton";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeMenu, setActiveMenu] = useState<string | null>(null);

//     return (
//         <header className="fixed top-4 inset-x-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <nav
//                 className="w-full bg-[#030712]/40 backdrop-blur-xl border border-white/[0.05] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300"
//                 onMouseLeave={() => setActiveMenu(null)}
//             >
//                 <div className="flex items-center gap-2">
//                     <Link
//                         href="/"
//                         className="text-3xl font-black text-white tracking-wider hover:text-[#d4af37] transition-colors"
//                     >
//                         قريطنة <span className="text-[#d4af37]">جروب</span>
//                     </Link>
//                 </div>

//                 <div className="hidden lg:flex items-center gap-1">
//                     {navigation.map((item) => (
//                         <div
//                             key={item.label}
//                             className="relative py-2 px-1 text-xl"
//                             onMouseEnter={() => {
//                                 if (item.megaMenu) {
//                                     setActiveMenu(item.label);
//                                 } else {
//                                     setActiveMenu(null);
//                                 }
//                             }}
//                         >
//                             {item.href ? (
//                                 <Link
//                                     href={item.href}
//                                     className="text-sm font-medium text-white/70 hover:text-[#d4af37] px-4 py-2 rounded-full transition-colors"
//                                 >
//                                     {item.label}
//                                 </Link>
//                             ) : (
//                                 <button
//                                     className={`text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1 transition-colors ${
//                                         activeMenu === item.label
//                                             ? "text-[#d4af37]"
//                                             : "text-white/70 hover:text-[#d4af37]"
//                                     }`}
//                                 >
//                                     <span>{item.label}</span>

//                                     <ChevronDown
//                                         size={12}
//                                         className={`transition-transform duration-300 ${
//                                             activeMenu === item.label
//                                                 ? "rotate-180"
//                                                 : ""
//                                         }`}
//                                     />
//                                 </button>
//                             )}

//                             <AnimatePresence>
//                                 {item.megaMenu &&
//                                     activeMenu === item.label && (
//                                         <motion.div
//                                             initial={{ opacity: 0, y: 15 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             exit={{ opacity: 0, y: 10 }}
//                                             transition={{
//                                                 duration: 0.25,
//                                                 ease: [0.25, 1, 0.5, 1],
//                                             }}
//                                             className="absolute right-0 top-full mt-4 w-[480px] bg-[#030712]/95 backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-2 gap-4 text-right"
//                                         >
//                                             {item.megaMenu.map((subItem) => (
//                                                 <Link
//                                                     key={subItem.title}
//                                                     href={subItem.href}
//                                                     className="group p-3 rounded-xl border border-transparent hover:border-white/[0.03] hover:bg-white/[0.02] transition-all duration-200"
//                                                 >
//                                                     <h4 className="text-white text-xs font-semibold group-hover:text-[#d4af37] transition-colors mb-1">
//                                                         {subItem.title}
//                                                     </h4>

//                                                     <p className="text-white/40 text-[11px] leading-relaxed font-light">
//                                                         {subItem.description}
//                                                     </p>
//                                                 </Link>
//                                             ))}
//                                         </motion.div>
//                                     )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="hidden lg:flex items-center gap-4">
//                     <ContactButton />
//                 </div>

//                 <div className="flex lg:hidden items-center gap-4">
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="text-white hover:text-[#d4af37] transition-colors p-1"
//                     >
//                         {isOpen ? <X size={20} /> : <Menu size={20} />}
//                     </button>
//                 </div>
//             </nav>

//             <MobileMenu
//                 isOpen={isOpen}
//                 setIsOpen={setIsOpen}
//             />
//         </header>
//     );
// }
"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. استيراد الـ Hook
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import ContactButton from "@/components/buttons/ContactButton";
import LogoIcon from "../Logos/Logo-icon";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const pathname = usePathname(); // 2. جلب المسار الحالي للموقع

    return (
        <>
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-brand-primary/40 backdrop-blur-md pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <header className="fixed top-4 inset-x-0 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col z-50">
                <nav
                    className="relative z-50 w-full bg-card-dark/60 backdrop-blur-2xl border border-white/[0.06] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 shadow-lg"
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <div className="flex items-center gap-2">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group select-none"
                            style={{ direction: "rtl" }}
                        >
                            <div className="flex flex-col text-right leading-[1.1] sm:leading-[1.1]">
                                <span className="text-2xl text-center sm:text-lg font-black text-white tracking-wide group-hover:text-secondary-gold transition-colors">
                                    قريطنة
                                    <br />
                                    جروب
                                </span>
                            </div>

                            <LogoIcon
                                width={60}
                                height={60}
                                className="transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => {
                            const targetHref = item.href || "#";

                            const isActive = targetHref === "/" 
                                ? pathname === "/" 
                                : pathname.startsWith(targetHref);

                            return (
                                <div
                                    key={item.label}
                                    className="relative py-2 px-1"
                                    onMouseEnter={() => {
                                        if (item.megaMenu) {
                                            setActiveMenu(item.label);
                                        } else {
                                            setActiveMenu(null);
                                        }
                                    }}
                                >
                                    <Link
                                        href={targetHref}
                                        className={`text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors ${
                                            isActive || activeMenu === item.label
                                                ? "text-secondary-gold bg-white/[0.02]"
                                                : "text-white/70 hover:text-secondary-gold"
                                        }`}
                                        onClick={() => setActiveMenu(null)}
                                    >
                                        <span>{item.label}</span>

                                        {item.megaMenu && (
                                            <ChevronDown
                                                size={12}
                                                className={`transition-transform duration-300 ${
                                                    activeMenu === item.label || isActive ? "text-secondary-gold" : "text-white/40"
                                                } ${activeMenu === item.label ? "rotate-180" : ""}`}
                                            />
                                        )}
                                    </Link>

                                    <AnimatePresence>
                                        {item.megaMenu && activeMenu === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                                className="absolute right-1/2 translate-x-1/2 top-full mt-4 w-[560px] bg-card-dark/95 backdrop-blur-3xl border border-white/[0.08] rounded-3xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.65)] grid grid-cols-2 gap-5 text-center"
                                            >
                                                {item.megaMenu.map((subItem) => {
                                                    const isSubActive = pathname === subItem.href;

                                                    return (
                                                        <Link
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            onClick={() => setActiveMenu(null)}
                                                            className={`group p-4 rounded-xl border border-transparent flex flex-col items-center text-center transition-all duration-200 ${
                                                                isSubActive 
                                                                    ? "border-secondary-gold/20 bg-secondary-gold/5" 
                                                                    : "hover:border-secondary-gold/20 hover:bg-secondary-gold/5"
                                                            }`}
                                                        >
                                                            <h4 className={`text-sm font-bold transition-colors mb-1.5 ${
                                                                isSubActive ? "text-secondary-gold" : "text-white group-hover:text-secondary-gold"
                                                            }`}>
                                                                {subItem.title}
                                                            </h4>
                                                            <p className="text-white/50 text-xs leading-relaxed font-light">
                                                                {subItem.description}
                                                            </p>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ContactButton />
                    </div>

                    <div className="flex lg:hidden items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-secondary-gold transition-colors p-1"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>

                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
        </>
    );
}