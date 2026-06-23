"use client";

import { CONTACT } from "@/data/whats-num";
import { InvestorFormInputs } from "@/schemas/become-investor-schema";

interface BecomeInvestorWhatsAppButtonProps {
    formData: InvestorFormInputs;
    isValid: boolean;
}

export default function BecomeInvestorWhatsAppButton({ formData, isValid }: BecomeInvestorWhatsAppButtonProps) {
    
    const handleWhatsAppRedirect = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!isValid) return;


        const interestsText = formData.interests && formData.interests.length > 0 
            ? formData.interests.join(" - ") 
            : "لم يحدد";

        const experienceText = formData.hasExperience === "yes" 
            ? `نعم \n *تفاصيل الخبرة:* ${formData.experienceDetails || "لم تذكر"}` 
            : "لا توجد خبرة سابقة";

        const volumeLabels: Record<string, string> = {
            "less-than-1m": "أقل من مليون جنيه",
            "1m-to-5m": "من 1 إلى 5 مليون جنيه",
            "more-than-5m": "أكثر من 5 مليون جنيه"
        };
        const investmentVolumeText = volumeLabels[formData.investmentVolume] || formData.investmentVolume;

        const message = 
` *طلب انضمام جديد للمنظومة (شريك مستثمر)* 

 *الاسم الكامل:* ${formData.fullName}
 *رقم الهاتف:* ${formData.phone}
 *البريد الإلكتروني:* ${formData.email || "لم يذكر"}

 *الموقع الجغرافي:*
• *المحافظة:* ${formData.governorate}
• *المركز/المدينة:* ${formData.city}

*الاهتمامات الاستثمارية:*
[ ${interestsText} ]

 *حجم الاستثمار المتوقع:*
• ${investmentVolumeText}

 *هل توجد تجارب سابقة؟*
• ${experienceText}

---
_تم إرسال هذا الطلب عبر بوابة المستثمر والشريك الإستراتيجي_`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <button
            type="submit"
            onClick={handleWhatsAppRedirect}
            disabled={!isValid}
            className={`w-full py-4 rounded-xl bg-linear-to-r from-[#d4af37] to-[#f3e5ab] text-slate-950 font-bold text-sm tracking-wide shadow-lg hover:opacity-90 transition-all duration-300 ${!isValid ? "opacity-50 cursor-not-allowed filter grayscale" : ""}`}
        >
            إرسال البيانات والاتصال عبر واتساب
        </button>
    );
}