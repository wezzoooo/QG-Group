import { Metadata } from "next";
import { projectCategories, coreValues, whyUsFeatures } from "@/data/projects";
import ProjectsClientContent from "@/components/sections/projects/ProjectsClientContent";

export const metadata: Metadata = {
    title: "مشاريعنا واستثماراتنا التنموية | قريطنة جروب",
    description: "اكتشف مشاريع قريطنة جروب للاستثمار والتنمية المستدامة. نطوّر استثمارات استراتيجية تصنع الأثر وتحقق التوازن الثلاثي المعياري لتبني مستقبل الأجيال.",
    keywords: ["مشاريع قريطنة جروب", "استثمار مستدام", "تنمية اقتصادية", "أصول استراتيجية", "الابتكار والاستدامة"],
};

export default function ProjectsPage() {
    // 1. تنظيف أيقونات تصنيفات المشاريع
    const sanitizedCategories = projectCategories.map(category => {
        const iconObj = category.icon as any;
        return {
            ...category,
            icon: typeof category.icon === 'function' || typeof category.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "Building2")
                : category.icon
        };
    });

    // 2. تنظيف أيقونات الرؤية والقيم
    const sanitizedCoreValues = coreValues.map(value => {
        const iconObj = value.icon as any;
        return {
            ...value,
            icon: typeof value.icon === 'function' || typeof value.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "ShieldCheck")
                : value.icon
        };
    });

    return (
        <ProjectsClientContent
            projectCategories={sanitizedCategories}
            coreValues={sanitizedCoreValues}
            whyUsFeatures={whyUsFeatures}
        />
    );
}