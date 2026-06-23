"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    Building2,
    ChevronDown,
    Mail,
    MessageSquare,
    Phone,
    ShieldCheck,
    User,
} from "lucide-react";

import { contactSchema, ContactFormValues } from "@/schemas/contactSchema";
import ContactWhatsAppButton from "../buttons/ContactWhatsAppButton";

export default function ContactForm() {
    const {
        register,
        control,
        setValue,
        watch,
        formState: { errors, isValid },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            interestType: "general",
            message: "",
        },
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentFormData = watch();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    const interestOptions = [
        {
            value: "general",
            label: "استفسار عام أو تواصل اعتيادي",
        },
        {
            value: "investment",
            label: "طلب استثمار أو مراجعة محافظ",
        },
        {
            value: "partnership",
            label: "بناء شراكة استراتيجية مشتركة",
        },
        {
            value: "entrepreneur",
            label: "مسار تمويل ودعم رواد الأعمال",
        },
    ];

    const inputBaseStyles =
        "w-full bg-brand-primary/40 border border-white/10 rounded-xl pr-11 pl-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-secondary-gold/40 transition-all duration-300 text-right";

    return (
        <div className="card p-6 sm:p-10">
            <div className="text-right space-y-1 mb-6">
                <h2 className="text-lg sm:text-xl font-bold">
                    إرسال طلب مباشر
                </h2>

                <p className="text-xs text-white/60 font-light">
                    يرجى تزويدنا بالبيانات التالية وسيتم مراجعتها
                    فوراً من القسم المختص.
                </p>
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 text-right"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="block text-xs font-light text-white/60">
                            الاسم الكامل{" "}
                            <span className="text-secondary-gold">
                                *
                            </span>
                        </label>

                        <div className="relative flex items-center">
                            <input
                                type="text"
                                {...register("name")}
                                placeholder="أدخل اسمك الكامل"
                                className={`${inputBaseStyles} ${
                                    errors.name
                                        ? "border-red-500/40"
                                        : ""
                                }`}
                            />

                            <User
                                size={18}
                                className="absolute right-4 text-white/30 pointer-events-none"
                            />
                        </div>

                        {errors.name && (
                            <p className="text-red-400 text-xs flex items-center gap-1 mt-1 font-light">
                                <AlertCircle size={12} />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-light text-white/60">
                            البريد الإلكتروني (اختياري)
                        </label>

                        <div className="relative flex items-center">
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="name@example.com"
                                className={`${inputBaseStyles} ${
                                    errors.email
                                        ? "border-red-500/40"
                                        : ""
                                }`}
                                style={{ direction: "ltr" }}
                            />

                            <Mail
                                size={18}
                                className="absolute right-4 text-white/30 pointer-events-none"
                            />
                        </div>

                        {errors.email && (
                            <p className="text-red-400 text-xs flex items-center gap-1 mt-1 font-light">
                                <AlertCircle size={12} />
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="block text-xs font-light text-white/60">
                            رقم الهاتف / الواتساب{" "}
                            <span className="text-secondary-gold">
                                *
                            </span>
                        </label>

                        <div className="relative flex items-center">
                            <input
                                type="tel"
                                {...register("phone")}
                                placeholder="مثال: 010XXXXXXXX"
                                className={`${inputBaseStyles} ${
                                    errors.phone
                                        ? "border-red-500/40"
                                        : ""
                                }`}
                                style={{ direction: "ltr" }}
                            />

                            <Phone
                                size={18}
                                className="absolute right-4 text-white/30 pointer-events-none"
                            />
                        </div>

                        {errors.phone && (
                            <p className="text-red-400 text-xs flex items-center gap-1 mt-1 font-light">
                                <AlertCircle size={12} />
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-light text-white/60">
                            اسم الشركة / المؤسسة (اختياري)
                        </label>

                        <div className="relative flex items-center">
                            <input
                                type="text"
                                {...register("company")}
                                placeholder="اسم شركة أعمالك إن وجد"
                                className={`${inputBaseStyles} ${
                                    errors.company
                                        ? "border-red-500/40"
                                        : ""
                                }`}
                            />

                            <Building2
                                size={18}
                                className="absolute right-4 text-white/30 pointer-events-none"
                            />
                        </div>

                        {errors.company && (
                            <p className="text-red-400 text-xs flex items-center gap-1 mt-1 font-light">
                                <AlertCircle size={12} />
                                {errors.company.message}
                            </p>
                        )}
                    </div>
                </div>

                <div
                    className="space-y-2 relative"
                    ref={dropdownRef}
                >
                    <label className="block text-xs font-light text-white/60">
                        طبيعة وموضوع الطلب{" "}
                        <span className="text-secondary-gold">
                            *
                        </span>
                    </label>

                    <Controller
                        control={control}
                        name="interestType"
                        render={({ field }) => (
                            <>
                                <div
                                    onClick={() =>
                                        setDropdownOpen(
                                            !dropdownOpen
                                        )
                                    }
                                    className={`w-full bg-brand-primary/40 border ${
                                        errors.interestType
                                            ? "border-red-500/40"
                                            : "border-white/10 hover:border-secondary-gold/30"
                                    } rounded-xl py-3.5 pr-11 pl-4 text-sm cursor-pointer transition-all duration-300 flex items-center justify-between select-none relative`}
                                >
                                    <span className="text-white">
                                        {interestOptions.find(
                                            (o) =>
                                                o.value ===
                                                field.value
                                        )?.label ||
                                            "اختر موضوع الطلب"}
                                    </span>

                                    <ChevronDown
                                        size={16}
                                        className={`text-white/40 transition-transform duration-300 ${
                                            dropdownOpen
                                                ? "rotate-180 text-secondary-gold"
                                                : ""
                                        }`}
                                    />

                                    <MessageSquare
                                        size={18}
                                        className="absolute right-4 text-white/30"
                                    />
                                </div>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -4,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -4,
                                            }}
                                            transition={{
                                                duration: 0.15,
                                            }}
                                            className="absolute z-50 w-full mt-1.5 rounded-xl border border-secondary-gold/20 bg-card-dark shadow-2xl overflow-hidden p-1"
                                        >
                                            {interestOptions.map(
                                                (option) => (
                                                    <div
                                                        key={
                                                            option.value
                                                        }
                                                        onClick={() => {
                                                            setValue(
                                                                "interestType",
                                                                option.value,
                                                                {
                                                                    shouldValidate:
                                                                        true,
                                                                }
                                                            );
                                                            setDropdownOpen(
                                                                false
                                                            );
                                                        }}
                                                        className={`px-4 py-3 text-xs sm:text-sm cursor-pointer transition-all rounded-lg flex items-center justify-between ${
                                                            field.value ===
                                                            option.value
                                                                ? "bg-secondary-gold/10 text-secondary-gold font-medium"
                                                                : "text-white/80 hover:text-white hover:bg-secondary-gold/10 font-light"
                                                        }`}
                                                    >
                                                        <span>
                                                            {
                                                                option.label
                                                            }
                                                        </span>

                                                        {field.value ===
                                                            option.value && (
                                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold" />
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    />

                    {errors.interestType && (
                        <p className="text-red-400 text-xs flex items-center gap-1 mt-1 font-light">
                            <AlertCircle size={12} />
                            {errors.interestType.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="block text-xs font-light text-white/60">
                        تفاصيل الرسالة أو الطلب{" "}
                        <span className="text-secondary-gold">
                            *
                        </span>
                    </label>

                    <textarea
                        rows={4}
                        {...register("message")}
                        placeholder="اكتب تفاصيل طلبك أو استفسارك الاستثماري هنا..."
                        className="w-full bg-brand-primary/40 border border-white/10 focus:border-secondary-gold/40 rounded-xl py-3.5 px-4 text-sm text-white placeholder:text-white/25 focus:outline-none transition-all duration-300 text-right resize-none leading-6"
                    />

                    {errors.message && (
                        <p className="text-red-400 text-xs flex items-center gap-1 mt-1 font-light">
                            <AlertCircle size={12} />
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50 order-2 sm:order-1">
                        <ShieldCheck
                            size={14}
                            className="text-secondary-gold"
                        />
                        <span className="text-[11px] font-light tracking-wide">
                            البيانات مشفرة وآمنة تماماً وفق معايير
                            الحوكمة.
                        </span>
                    </div>

                    <ContactWhatsAppButton
                        formData={currentFormData}
                        isValid={isValid}
                    />
                </div>
            </form>
        </div>
    );
}