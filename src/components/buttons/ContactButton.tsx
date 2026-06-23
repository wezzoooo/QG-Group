"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactButton() {
    return (
        <Link href="/contact" className="block w-full lg:w-auto">
            <Button
                type="button"
                className="w-full lg:w-auto px-6 py-6 rounded-full text-sm font-medium bg-white text-[#030712] hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)] flex items-center justify-center gap-2 group cursor-pointer border-none"
            >
                <span>تواصل معنا</span>
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Button>
        </Link>
    );
}