import { Metadata } from "next";
import {
    institutionHero,
    investmentMetrics,
    visionMission,
    investmentFields,
    investmentMethodology
} from "@/data/investments";
import InvestmentClientContent from "@/components/sections/investments/InvestmentClientContent";

export const metadata: Metadata = {
    title: "المؤسسة الاستثمارية | قريطنة جروب",
    description: "اكتشف الركائز الاستراتيجية وإدارة الأصول والامتثال الصارم في قريطنة جروب للاستثمار والتنمية المستدامة. نبني استثمارات قوية ومستدامة تدعم النمو الاقتصادي.",
    keywords: ["استثمار قريطنة جروب", "إدارة الأصول", "التنمية المستدامة", "الحوكمة المالية", "محافظ استثمارية"],
};

export default function InvestmentInstitutionPage() {
    
    // 1. تنظيف أيقونات المقاييس (investmentMetrics)
    const sanitizedMetrics = investmentMetrics.map(metric => {
        const iconObj = metric.icon as any;
        return {
            ...metric,
            icon: iconObj && (typeof iconObj === 'function' || typeof iconObj === 'object')
                ? (iconObj.displayName || iconObj.name || "LineChart")
                : String(metric.icon || "LineChart")
        };
    });

    // 2. تنظيف أيقونات الرؤية والرسالة (visionMission)
    const sanitizedVisionMission = visionMission.map(item => {
        const iconObj = item.icon as any;
        return {
            ...item,
            icon: iconObj && (typeof iconObj === 'function' || typeof iconObj === 'object')
                ? (iconObj.displayName || iconObj.name || "Target")
                : String(item.icon || "Target")
        };
    });

    // 3. تنظيف أيقونات مجالات العمل (investmentFields)
    const sanitizedFields = investmentFields.map(field => {
        const iconObj = field.icon as any;
        return {
            ...field,
            icon: iconObj && (typeof iconObj === 'function' || typeof iconObj === 'object')
                ? (iconObj.displayName || iconObj.name || "Briefcase")
                : String(field.icon || "Briefcase")
        };
    });

    return (
        <InvestmentClientContent
            institutionHero={institutionHero}
            investmentMetrics={sanitizedMetrics}
            visionMission={sanitizedVisionMission}
            investmentFields={sanitizedFields}
            investmentMethodology={investmentMethodology}
        />
    );
}