import { Metadata } from "next";
import { mainServiceSectors, values, features } from "@/data/services"; 
import ServicesClientContent from "@/components/sections/services/ServicesClientContent";

export const metadata: Metadata = {
    title: "خدماتنا وقطاعاتنا الاستراتيجية | قريطنة جروب",
    description: "اكتشف منظومة الخدمات المتكاملة التي تقدمها قريطنة جروب للاستثمار والتنمية المستدامة.",
};

export default function ServicesPage() {
    const sanitizedSectors = mainServiceSectors.map(sector => {
        const iconObj = sector.icon as any;
        return {
            ...sector,
            icon: typeof sector.icon === 'function' || typeof sector.icon === 'object' 
                ? (iconObj.displayName || iconObj.name || "Building2") 
                : sector.icon
        };
    });

    const sanitizedValues = values.map(val => {
        const iconObj = val.icon as any;
        return {
            ...val,
            icon: typeof val.icon === 'function' || typeof val.icon === 'object' 
                ? (iconObj.displayName || iconObj.name || "ShieldCheck") 
                : val.icon
        };
    });

    return (
        <ServicesClientContent 
            sectors={sanitizedSectors} 
            values={sanitizedValues} 
            features={features} 
        />
    );
}