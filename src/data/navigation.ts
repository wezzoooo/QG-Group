import { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
    {
        label: "خدماتنا",
        href: "/services",
        megaMenu: [
            {
                title: "مشروعات",
                description: "استعرض أبرز مشروعاتنا التنموية والرائدة في السوق.",
                href: "/services/projects",
            },
            {
                title: "فرص",
                description: "اكتشف الفرص الاستثمارية والخدمية المتاحة حالياً.",
                href: "/services/opportunities",
            },
            {
                title: "المؤسسة الاستثمارية",
                description: "الذراع الاستثماري لإدارة وتنمية الأصول بكفاءة.",
                href: "/services/investment-institution",
            },
            {
                title: "Q business community",
                description: "مجتمع الأعمال الحصري لتبادل الفرص والشراكات الاستراتيجية.",
                href: "/services/q-business-community",
            },
        ],
    },
    {
        label: "عن الشركة",
        href: "/about",
        megaMenu: [
            {
                title: "المؤسس ومجلس الإدارة",
                description: "تعرف على القادة والرؤية الاستراتيجية التي تقود المجموعة.",
                href: "/about/leadership",
            },
            {
                title: "QB Profile",
                description: "الملف التعريفي الشامل للمجموعة وإنجازاتها عبر السنوات.",
                href: "/about/qb-profile",
            },
        ],
    },
    {
        label: "أخبار واستثمار",
        href: "/news-and-investment",
    },
    {
        label: "المؤسسة الاستشارية",
        href: "/consulting-institution",
    },
    {
        label: "كن أحد مستثمرينا",
        href: "/become-investor",
    },
];