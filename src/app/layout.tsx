import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/buttons/FloatingWhatsApp";

import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
    variable: "--font-noto-kufi",
    subsets: ["arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

// الميتا داتا الشاملة على أعلى مستوى للـ SEO
export const metadata: Metadata = {
    metadataBase: new URL("https://koreitnagroup.com"), // استبدله برابط موقعك الفعلي لاحقاً
    title: {
        default: "قريطنة جروب للاستثمار والتنمية المستدامة | QG Group",
        template: "%s | قريطنة جروب QG Group"
    },
    description: "قريطنة جروب (QG Group) المؤسسة الرائدة في استكشاف وتطوير الفرص الاستثمارية، إدارة الأصول والمحافظ المالية، وإعداد دراسات الجدوى الاقتصادية الشاملة لبناء مجتمعات استثمارية تنموية مستدامة.",
    keywords: [
        "قريطنة جروب", "QG Group", "الفرص الاستثمارية", "دراسات الجدوى", 
        "المجتمعات الاستثمارية", "إدارة الأصول", "الحوكمة المالية", 
        "استثمار مستدام", "تحليل المخاطر", "استشارات استثمارية وتنموية"
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "قريطنة جروب للاستثمار والتنمية المستدامة | QG Group",
        description: "استكشاف وتطوير الفرص الاستثمارية وإدارة الأصول وبناء المجتمعات التنموية الشاملة.",
        url: "https://koreitnagroup.com",
        siteName: "QG Group",
        locale: "ar_EG",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    // البيانات المنظمة لمساعدة عناكب جوجل في فهم هوية وتخصص الشركة (Schema Markup)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "قريطنة جروب للاستثمار والتنمية المستدامة | QG Group",
        "url": "https://koreitnagroup.com",
        "logo": "https://koreitnagroup.com/logo.png", // رابط اللوجو الخاص بك
        "description": "مؤسسة استثمارية رائدة متخصصة في إدارة الأصول، تطوير الفرص الاستثمارية، وإعداد دراسات الجدوى الاقتصادية الشاملة للمجتمعات الاستثمارية.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "EG"
        },
        "knowsAbout": [
            "الاستثمار المستدام",
            "إدارة الأصول والمحافظ المالية",
            "إعداد دراسات الجدوى الاقتصادية",
            "تطوير المجتمعات الاستثمارية والفرص"
        ]
    };

    return (
        <html
            lang="ar"
            dir="rtl"
            className={notoKufiArabic.variable}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className="
                    min-h-screen
                    bg-brand-primary
                    text-white
                    antialiased
                    relative
                    font-sans
                "
            >
                <div className="absolute inset-0 z-0 bg-radial from-[#0f1f33] via-[#0b1a2f] to-[#0b1a2f] to-90% pointer-events-none" />

                <div className="relative z-10 flex flex-col min-h-screen">
                    <Navbar />

                    <main className="grow pt-24">
                        {children}
                        <FloatingWhatsApp />
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    );
}