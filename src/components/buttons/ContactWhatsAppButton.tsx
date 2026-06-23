"use client";

import { Send } from "lucide-react";
import { CONTACT } from "@/data/whats-num";
import { ContactFormValues } from "@/schemas/contactSchema";

interface ContactWhatsAppButtonProps {
    formData: ContactFormValues;
    isValid: boolean;
}

export default function ContactWhatsAppButton({ formData, isValid }: ContactWhatsAppButtonProps) {

    const handleWhatsAppRedirect = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!isValid) return;

        const interestLabels: Record<string, string> = {
            general: "استفسار عام أو تواصل اعتيادي",
            investment: "طلب استثمار أو مراجعة محافظ",
            partnership: "بناء شراكة استراتيجية مشتركة",
            entrepreneur: "مسار تمويل ودعم رواد الأعمال"
        };

        const interestText = interestLabels[formData.interestType] || formData.interestType;

        const message =
            ` *رسالة تواصل جديدة عبر الموقع الرسمي* 

• *الاسم الكامل:* ${formData.name}
• *رقم الهاتف:* ${formData.phone}
• *البريد الإلكتروني:* ${formData.email || "لم يذكر"}
• *الشركة / المؤسسة:* ${formData.company || "لم تذكر"}

---
 *طبيعة وموضوع الطلب:*
 [ ${interestText} ]

 *تفاصيل الرسالة أو الطلب:*
"${formData.message}"
---

_تم إنشاء هذا الطلب تلقائياً عبر بوابة التواصل المباشر الموحدة_`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <button
            type="button" 
            onClick={handleWhatsAppRedirect}
            disabled={!isValid}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold shadow-md transition-all duration-300 group order-1 sm:order-2
        ${!isValid
                    ? "bg-white/[0.02] border border-white/[0.05] text-slate-500 cursor-not-allowed opacity-40"
                    : "bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/40 text-[#d4af37] hover:border-[#d4af37] hover:text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.08)] cursor-pointer"
                }`}
        >
            <span>إرسال الطلب عبر واتساب</span>
            <Send size={12} className={`transform transition-transform ${isValid ? "group-hover:-translate-x-0.5 group-hover:translate-y-0.5" : ""}`} />
        </button>
    );
}