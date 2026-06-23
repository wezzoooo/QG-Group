import { Metadata } from "next";
import { oppsHero, mainCategories, whyChooseUs, sectorsData } from "@/data/opportunities";
import OpportunitiesClientContent from "@/components/sections/opportunities/OpportunitiesClientContent";

export const metadata: Metadata = {
    title: "استكشاف وتطوير الفرص الاستثمارية | قريطنة جروب",
    description: "اكتشف وطوّر الفرص الاستثمارية مع قريطنة جروب للاستثمار والتنمية المستدامة. نمكّن الشراكات الاستراتيجية وندعم المشاريع في قطاعات النمو الاقتصادي.",
    keywords: ["فرص استثمارية", "شراكات استراتيجية", "تطوير المشاريع", "قريطنة جروب", "نمو اقتصادي مستدام"],
};

export default function OpportunitiesPage() {
    const sanitizedMainCategories = mainCategories.map(category => {
        const iconObj = category.icon as any;
        return {
            ...category,
            icon: typeof category.icon === 'function' || typeof category.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "Briefcase")
                : category.icon
        };
    });
    const sanitizedSectorsData = sectorsData.map(sector => {
        const iconObj = sector.icon as any;
        return {
            ...sector,
            icon: typeof sector.icon === 'function' || typeof sector.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "ChartLine")
                : sector.icon
        };
    });

    return (
        <OpportunitiesClientContent
            oppsHero={oppsHero}
            mainCategories={sanitizedMainCategories}
            whyChooseUs={whyChooseUs}
            sectorsData={sanitizedSectorsData}
        />
    );
}