import { Metadata } from "next";
import { contactHero, contactInfo, socialLinks } from "@/data/contact"; 
import ContactClientContent from "@/components/sections/contact/ContactClientContent"; 

export const metadata: Metadata = {
    title: "اتصل بنا | قريطنة جروب",
    description: "تواصل معنا للاستفسار عن خدماتنا الاستثمارية والتنموية.",
};

export default function ContactUsPage() {
    const sanitizedContactInfo = contactInfo.map(info => {
        const iconObj = info.icon as any;
        return {
            ...info,
            icon: typeof info.icon === 'function' || typeof info.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "Phone")
                : info.icon
        };
    });

    const sanitizedSocialLinks = socialLinks.map(social => {
        const iconObj = social.icon as any;
        return {
            ...social,
            icon: typeof social.icon === 'function' || typeof social.icon === 'object'
                ? (iconObj.displayName || iconObj.name || "Share2")
                : social.icon
        };
    });

    return (
        <ContactClientContent 
            contactHero={contactHero}
            contactInfo={sanitizedContactInfo}
            socialLinks={sanitizedSocialLinks}
        />
    );
}