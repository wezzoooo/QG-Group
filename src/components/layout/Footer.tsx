"use client";

import { CONTACT } from "@/data/whats-num";
import { Mail, MapPin, Award } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/[0.03] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.03]">

          {/* معلومات البراند */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-secondary-gold">
              <Award size={20} />
              <span className="font-bold text-lg tracking-wide">قريطنة جروب</span>
            </div>
            <p className="text-xs sm:text-sm text-white/40 font-light leading-7 max-w-sm">
              بيت خبرة استشاري رائد، نلتزم بصياغة فكر تنفيذي متكامل وهيكلة معيارية تحمي استثماراتكم وتضمن انتقالها من الفكرة إلى الريادة.
            </p>

            {/* شبكات التواصل */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaXTwitter, href: "#" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.03] text-white/40 hover:text-secondary-gold hover:border-secondary-gold/20 hover:bg-secondary-gold/5 transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* قطاعات الاستثمار */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider border-r-2 border-secondary-gold/40 pr-2">قطاعات الاستثمار</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/50 font-light">
              {["القطاع العقاري والتطوير", "الاستثمار الزراعي والإنتاج", "القطاع الخدمي واللوجستي", "التحول الرقمي والتعليم"].map((item, idx) => (
                <li key={idx} className="hover:text-secondary-gold transition-colors duration-200 cursor-pointer w-fit">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* روابط سريعة */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider border-r-2 border-secondary-gold/40 pr-2">روابط سريعة</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/50 font-light">
              {["الرئيسية", "عن المؤسسة", "باقة خدماتنا", "أدوات النجاح"].map((item, idx) => (
                <li key={idx} className="hover:text-secondary-gold transition-colors duration-200 cursor-pointer w-fit">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* قنوات التواصل */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider border-r-2 border-secondary-gold/40 pr-2">قنوات التواصل</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/50 font-light flex flex-col items-start">
              <li className="flex items-center gap-3 flex-row-reverse">
                <span className="hover:text-white transition-colors duration-200">القاهرة / كفر الشيخ، مصر</span>
                <MapPin size={14} className="text-secondary-gold shrink-0" />
              </li>
              <li className="flex items-center gap-3 flex-row-reverse">
                <span className="hover:text-white transition-colors duration-200 select-all font-mono">info@quritnagroup.com</span>
                <Mail size={14} className="text-secondary-gold shrink-0" />
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-row-reverse group"
                >
                  <span
                    className="font-mono select-all transition-colors duration-200 group-hover:text-white"
                    style={{ direction: "ltr" }}
                  >
                    {CONTACT.whatsappDisplay}
                  </span>
                  <FaWhatsapp
                    size={14}
                    className="text-secondary-gold shrink-0 transition-transform duration-200"
                  />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* الحقوق والتوثيق */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <p className="text-[11px] sm:text-xs text-white/30 font-light tracking-wide">
            &copy; {new Date().getFullYear()} مجموعة قريطنة للاستثمار والتنمية المستدامة. جميع الحقوق محفوظة.
          </p>
          <div className="text-[10px] sm:text-xs text-white/20 font-serif tracking-widest select-none">
            M Q G &bull; E C O S Y S T E M
          </div>
        </div>
      </div>
    </footer>
  );
}