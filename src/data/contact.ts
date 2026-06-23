import {
    Phone,
    Mail,
    MapPin,
    Clock
} from "lucide-react";

import {
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaTelegramPlane
} from "react-icons/fa";

export const contactHero = {
    badge: "تواصل معنا",
    title: "مستعدون لبناء شراكتنا القادمة",
    desc: "يسعدنا في قريطنة جروب استقبال استفساراتكم وطلبات الشراكة أو الاستثمار. فريقنا المتخصص متواجد دائمًا لتقديم الدعم وتحويل الطموحات إلى نتائج ملموسة."
};

export const contactInfo = [
    {
        title: "أرقام التواصل المباشر",
        value: "+966 500 000 000",
        subValue: "+966 11 000 0000",
        icon: Phone,
    },
    {
        title: "البريد الإلكتروني الرسمي",
        value: "info@qg-group.com",
        subValue: "invest@qg-group.com",
        icon: Mail,
    },
    {
        title: "المقر الرئيسي والعناوين",
        value: "المملكة العربية السعودية، الرياض",
        subValue: "برج قريطنة الاستثماري - الدور 18",
        icon: MapPin,
    },
    {
        title: "أوقات العمل الرسمية",
        value: "من الأحد إلى الخميس",
        subValue: "09:00 صباحاً - 05:00 مساءً",
        icon: Clock,
    }
];

export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/company/qraytna-group",
        icon: FaLinkedinIn,
        color: "hover:text-[#0077b5] hover:border-[#0077b5]/30"
    },
    {
        name: "X / Twitter",
        url: "https://x.com/qraytna_group",
        icon: FaTwitter,
        color: "hover:text-white hover:border-white/30"
    },
    {
        name: "YouTube",
        url: "https://youtube.com/@qraytna_group",
        icon: FaYoutube,
        color: "hover:text-[#ff0000] hover:border-[#ff0000]/30"
    },
    {
        name: "Telegram Channel",
        url: "https://t.me/qraytna_group",
        icon: FaTelegramPlane,
        color: "hover:text-[#229ed9] hover:border-[#229ed9]/30"
    }
];