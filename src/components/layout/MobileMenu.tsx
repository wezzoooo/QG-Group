// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { navigation } from "@/data/navigation";
// import { Button } from "@/components/ui/button";

// interface MobileMenuProps {
//     isOpen: boolean;
//     setIsOpen: (isOpen: boolean) => void;
// }

// export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
//     const [expandedItem, setExpandedItem] = useState<string | null>(null);

//     const toggleExpand = (label: string) => {
//         setExpandedItem(expandedItem === label ? null : label);
//     };

//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -15 }}
//                     transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
//                     className="absolute inset-x-4 top-20 bg-[#030712]/95 backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-4 text-right z-50 overflow-hidden"
//                 >
//                     {navigation.map((item) => (
//                         <div key={item.label} className="flex flex-col">
//                             {item.href ? (
//                                 <Link 
//                                     href={item.href} 
//                                     onClick={() => setIsOpen(false)} 
//                                     className="text-sm font-medium text-white/80 hover:text-[#d4af37] py-2.5 border-b border-white/[0.02] block w-full text-right"
//                                 >
//                                     {item.label}
//                                 </Link>
//                             ) : (
//                                 <div className="flex flex-col">
//                                     <button 
//                                         onClick={() => toggleExpand(item.label)}
//                                         className="w-full flex items-center justify-start gap-2 text-sm font-medium py-2.5 border-b border-white/[0.02] text-white/80 text-right"
//                                     >
//                                         <span className={`lg:mr-0 ${expandedItem === item.label ? "text-[#d4af37] font-semibold" : ""}`}>
//                                             {item.label}
//                                         </span>
//                                         <ChevronDown 
//                                             size={16} 
//                                             className={`text-white/40 transition-transform duration-300 ${expandedItem === item.label ? "rotate-180 text-[#d4af37]" : ""}`} 
//                                         />
//                                     </button>

//                                     <AnimatePresence initial={false}>
//                                         {expandedItem === item.label && (
//                                             <motion.div
//                                                 initial={{ height: 0, opacity: 0 }}
//                                                 animate={{ height: "auto", opacity: 1 }}
//                                                 exit={{ height: 0, opacity: 0 }}
//                                                 transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
//                                                 className="overflow-hidden bg-white/[0.01] rounded-2xl pr-4 mt-1 flex flex-col gap-1 text-right"
//                                             >
//                                                 {item.megaMenu?.map((subItem) => (
//                                                     <Link 
//                                                         key={subItem.title} 
//                                                         href={subItem.href} 
//                                                         onClick={() => setIsOpen(false)} 
//                                                         className="group flex flex-col py-2.5 border-b border-white/[0.01] last:border-none text-right"
//                                                     >
//                                                         <span className="text-xs font-medium text-white/70 group-hover:text-[#d4af37] transition-colors">
//                                                             {subItem.title}
//                                                         </span>
//                                                         <span className="text-[11px] text-white/40 font-light mt-0.5 leading-relaxed">
//                                                             {subItem.description}
//                                                         </span>
//                                                     </Link>
//                                                 ))}
//                                             </motion.div>
//                                         )}
//                                     </AnimatePresence>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
                    
//                     <Link href="/contact" className="block w-full mt-2" onClick={() => setIsOpen(false)}>
//                         <Button
//                             type="button"
//                             className="w-full px-6 py-6 rounded-full text-sm font-medium bg-white text-[#030712] hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group cursor-pointer border-none"
//                         >
//                             <span>تواصل معنا</span>
//                             <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
//                         </Button>
//                     </Link>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navigation } from "@/data/navigation";
import ContactButton from "@/components/buttons/ContactButton";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    const toggleExpand = (label: string) => {
        setExpandedItem(expandedItem === label ? null : label);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-30 bg-black/40 backdrop-blur-md lg:hidden"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute inset-x-4 top-20 bg-brand-primary/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-4 text-right z-40 overflow-hidden mt-2"
                    >
                        {navigation.map((item) => {
                            const targetHref = item.href ||  "#";

                            const isActive = targetHref === "/" 
                                ? pathname === "/" 
                                : pathname.startsWith(targetHref);

                            const hasSubMenu = item.megaMenu && item.megaMenu.length > 0;

                            return (
                                <div key={item.label} className="flex flex-col">
                                    {!hasSubMenu ? (
                                        <Link 
                                            href={targetHref} 
                                            onClick={() => setIsOpen(false)} 
                                            className={`text-sm font-medium py-2.5 border-b border-white/[0.02] block w-full text-right transition-colors ${
                                                isActive ? "text-secondary-gold font-bold" : "text-white/80 hover:text-secondary-gold"
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <div className="flex flex-col">
                                            <button 
                                                onClick={() => toggleExpand(item.label)}
                                                className="w-full flex items-center justify-start gap-2 text-sm font-medium py-2.5 border-b border-white/[0.02] text-white/80 text-right transition-colors"
                                            >
                                                <span 
                                                    onClick={(e) => {
                                                        e.stopPropagation(); 
                                                        setIsOpen(false);    
                                                        router.push(targetHref); 
                                                    }}
                                                    className={`transition-colors cursor-pointer hover:text-secondary-gold ${
                                                        isActive || expandedItem === item.label ? "text-secondary-gold font-semibold" : ""
                                                    }`}
                                                >
                                                    {item.label}
                                                </span >

                                                <ChevronDown 
                                                    size={16} 
                                                    className={`text-white/40 transition-transform duration-300 ${expandedItem === item.label ? "rotate-180 text-secondary-gold" : ""}`} 
                                                />
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {expandedItem === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                                        className="overflow-hidden bg-secondary-gold/5 rounded-2xl pr-4 mt-1 flex flex-col gap-1 text-right border border-secondary-gold/10"
                                                    >
                                                        {item.megaMenu?.map((subItem) => {
                                                            const isSubActive = pathname === subItem.href;

                                                            return (
                                                                <Link 
                                                                    key={subItem.title} 
                                                                    href={subItem.href} 
                                                                    onClick={() => setIsOpen(false)} 
                                                                    className="group flex flex-col py-2.5 border-b border-white/[0.01] last:border-none text-right"
                                                                >
                                                                    <span className={`text-xs font-semibold transition-colors ${
                                                                        isSubActive ? "text-secondary-gold" : "text-white/70 group-hover:text-secondary-gold"
                                                                    }`}>
                                                                        {subItem.title}
                                                                    </span>
                                                                    <span className="text-[11px] text-white/40 font-light mt-0.5 leading-relaxed">
                                                                        {subItem.description}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        
                        <div className="w-full mt-2" onClick={() => setIsOpen(false)}>
                            <ContactButton />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}