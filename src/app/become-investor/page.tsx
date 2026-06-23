"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, MapPin, Mail, Award, DollarSign, ChevronDown } from "lucide-react";
import { egyptData, InvestorFormInputs, investorFormSchema } from "@/schemas/become-investor-schema";
import BecomeInvestorWhatsAppButton from "@/components/buttons/BecomeInvestorWhatsAppButton";

export default function BecomeInvestorPage() {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors, isValid }, 
    } = useForm<InvestorFormInputs>({
        resolver: zodResolver(investorFormSchema),
        mode: "onChange", 
        defaultValues: {
            fullName: "",
            phone: "",
            governorate: "",
            city: "",
            email: "",
            interests: [],
            hasExperience: "no",
            experienceDetails: "",
            investmentVolume: "",
        },
    });

    const fullName = useWatch({ control, name: "fullName" });
    const phone = useWatch({ control, name: "phone" });
    const selectedGovernorate = useWatch({ control, name: "governorate" });
    const selectedCity = useWatch({ control, name: "city" });
    const email = useWatch({ control, name: "email" });
    const interests = useWatch({ control, name: "interests" });
    const hasExperience = useWatch({ control, name: "hasExperience" });
    const experienceDetails = useWatch({ control, name: "experienceDetails" });
    const selectedInvestmentVolume = useWatch({ control, name: "investmentVolume" });

    const fullData: InvestorFormInputs = {
        fullName: fullName || "",
        phone: phone || "",
        governorate: selectedGovernorate || "",
        city: selectedCity || "",
        email: email || "",
        interests: interests || [],
        hasExperience: hasExperience || "no",
        experienceDetails: experienceDetails || "",
        investmentVolume: selectedInvestmentVolume || "",
    };

    const [govOpen, setGovOpen] = useState(false);
    const [cityOpen, setCityOpen] = useState(false);
    const [volumeOpen, setVolumeOpen] = useState(false);

    const govRef = useRef<HTMLDivElement>(null);
    const cityRef = useRef<HTMLDivElement>(null);
    const volumeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (govRef.current && !govRef.current.contains(event.target as Node)) setGovOpen(false);
            if (cityRef.current && !cityRef.current.contains(event.target as Node)) setCityOpen(false);
            if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) setVolumeOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onSubmit = (data: InvestorFormInputs) => {
        console.log("Investor Application Submitted successfully:", data);
    };

    const interestOptions = ["عقاري", "زراعي", "صناعي", "تجاري", "تعليمي", "سياحي", "اخرى"];

    const investmentOptions = [
        { label: "أقل من مليون جنيه", value: "less-than-1m" },
        { label: "من 1 إلى 5 مليون جنيه", value: "1m-to-5m" },
        { label: "أكثر من 5 مليون جنيه", value: "more-than-5m" }
    ];

    return (
        <main
            className="min-h-screen pt-28 pb-20"
            style={{ direction: "rtl" }}
        >
            <div className="max-w-3xl mx-auto px-5 sm:px-6">
                <div className="text-center space-y-4 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary-gold/20 bg-secondary-gold/10 backdrop-blur-md">
                        <Award size={14} className="text-secondary-gold" />
                        <span className="text-xs font-light text-secondary-gold">
                            بوابة المستثمر والشريك الإستراتيجي
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold">
                        طلب الانضمام للمنظومة
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card p-6 sm:p-10"
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-2 text-right">
                            <label className="block text-sm font-medium text-white/80">
                                الاسم الكامل{" "}
                                <span className="text-secondary-gold">*</span>
                            </label>

                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    {...register("fullName")}
                                    placeholder="أدخل اسمك ثلاثي أو رباعي"
                                    className={`w-full bg-brand-primary/40 border ${errors.fullName
                                            ? "border-red-500/40"
                                            : "border-white/10 focus:border-secondary-gold/40"
                                        } rounded-xl py-3.5 pr-11 pl-4 text-sm focus:outline-none transition-all duration-300 text-right`}
                                />

                                <User
                                    size={18}
                                    className="absolute right-4 text-white/30"
                                />
                            </div>

                            {errors.fullName && (
                                <p className="text-xs text-red-400 font-light">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2 text-right">
                            <label className="block text-sm font-medium text-white/80">
                                رقم الهاتف{" "}
                                <span className="text-secondary-gold">*</span>
                            </label>

                            <div className="relative flex items-center">
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="مثال: 010XXXXXXXX"
                                    className={`w-full bg-brand-primary/40 border ${errors.phone
                                            ? "border-red-500/40"
                                            : "border-white/10 focus:border-secondary-gold/40"
                                        } rounded-xl py-3.5 pr-11 pl-4 text-sm font-mono focus:outline-none transition-all duration-300 text-right`}
                                    style={{ direction: "ltr" }}
                                />

                                <Phone
                                    size={18}
                                    className="absolute right-4 text-white/30"
                                />
                            </div>

                            {errors.phone && (
                                <p className="text-xs text-red-400 font-light">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div
                                className="space-y-2 text-right relative"
                                ref={govRef}
                            >
                                <label className="block text-sm font-medium text-white/80">
                                    المحافظة{" "}
                                    <span className="text-secondary-gold">*</span>
                                </label>

                                <div
                                    onClick={() => setGovOpen(!govOpen)}
                                    className={`w-full bg-brand-primary/40 border ${errors.governorate
                                            ? "border-red-500/40"
                                            : "border-white/10 hover:border-secondary-gold/30"
                                        } rounded-xl py-3.5 pr-11 pl-4 text-sm cursor-pointer transition-all duration-300 flex items-center justify-between select-none`}
                                >
                                    <span
                                        className={
                                            selectedGovernorate
                                                ? "text-white"
                                                : "text-white/30"
                                        }
                                    >
                                        {selectedGovernorate || "اختر المحافظة"}
                                    </span>

                                    <ChevronDown
                                        size={16}
                                        className={`text-white/40 transition-transform duration-300 ${govOpen ? "rotate-180" : ""
                                            }`}
                                    />

                                    <MapPin
                                        size={18}
                                        className="absolute right-4 text-white/30"
                                    />
                                </div>

                                <AnimatePresence>
                                    {govOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-50 w-full mt-1 max-h-60 overflow-y-auto rounded-xl border border-secondary-gold/20 bg-card-dark shadow-2xl"
                                        >
                                            {Object.keys(egyptData).map((gov) => (
                                                <div
                                                    key={gov}
                                                    onClick={() => {
                                                        setValue(
                                                            "governorate",
                                                            gov,
                                                            {
                                                                shouldValidate:
                                                                    true,
                                                            }
                                                        );
                                                        setValue("city", "");
                                                        setGovOpen(false);
                                                    }}
                                                    className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selectedGovernorate === gov
                                                            ? "bg-secondary-gold/10 text-secondary-gold"
                                                            : "text-white/80 hover:text-white hover:bg-secondary-gold/10"
                                                        }`}
                                                >
                                                    {gov}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {errors.governorate && (
                                    <p className="text-xs text-red-400 font-light">
                                        {errors.governorate.message}
                                    </p>
                                )}
                            </div>

                            <div
                                className="space-y-2 text-right relative"
                                ref={cityRef}
                            >
                                <label className="block text-sm font-medium text-white/80">
                                    المركز / المدينة{" "}
                                    <span className="text-secondary-gold">*</span>
                                </label>

                                <div
                                    onClick={() =>
                                        selectedGovernorate &&
                                        setCityOpen(!cityOpen)
                                    }
                                    className={`w-full bg-brand-primary/40 border ${errors.city
                                            ? "border-red-500/40"
                                            : "border-white/10"
                                        } rounded-xl py-3.5 pr-11 pl-4 text-sm flex items-center justify-between select-none ${selectedGovernorate
                                            ? "cursor-pointer hover:border-secondary-gold/30"
                                            : "cursor-not-allowed opacity-40"
                                        }`}
                                >
                                    <span
                                        className={
                                            selectedCity
                                                ? "text-white"
                                                : "text-white/30"
                                        }
                                    >
                                        {selectedCity || "اختر المركز"}
                                    </span>

                                    <ChevronDown
                                        size={16}
                                        className={`text-white/40 transition-transform duration-300 ${cityOpen ? "rotate-180" : ""
                                            }`}
                                    />

                                    <MapPin
                                        size={18}
                                        className="absolute right-4 text-white/30"
                                    />
                                </div>

                                <AnimatePresence>
                                    {cityOpen && selectedGovernorate && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-50 w-full mt-1 max-h-60 overflow-y-auto rounded-xl border border-secondary-gold/20 bg-card-dark shadow-2xl"
                                        >
                                            {egyptData[
                                                selectedGovernorate
                                            ]?.map((city) => (
                                                <div
                                                    key={city}
                                                    onClick={() => {
                                                        setValue("city", city, {
                                                            shouldValidate: true,
                                                        });
                                                        setCityOpen(false);
                                                    }}
                                                    className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selectedCity === city
                                                            ? "bg-secondary-gold/10 text-secondary-gold"
                                                            : "text-white/80 hover:text-white hover:bg-secondary-gold/10"
                                                        }`}
                                                >
                                                    {city}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {errors.city && (
                                    <p className="text-xs text-red-400 font-light">
                                        {errors.city.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2 text-right">
                            <label className="block text-sm font-medium text-white/60">
                                البريد الإلكتروني (اختياري)
                            </label>

                            <div className="relative flex items-center">
                                <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="example@domain.com"
                                    className="w-full bg-brand-primary/40 border border-white/10 focus:border-secondary-gold/40 rounded-xl py-3.5 pr-11 pl-4 text-sm focus:outline-none transition-all duration-300 text-right"
                                />

                                <Mail
                                    size={18}
                                    className="absolute right-4 text-white/30"
                                />
                            </div>

                            {errors.email && (
                                <p className="text-xs text-red-400 font-light">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-3 text-right">
                            <label className="block text-sm font-medium text-white/80">
                                الاهتمامات الاستثمارية{" "}
                                <span className="text-secondary-gold">*</span>

                                <span className="text-xs text-white/40 font-light">
                                    {" "}
                                    (يمكنك اختيار أكثر من مجال)
                                </span>
                            </label>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {interestOptions.map((interest) => (
                                    <label
                                        key={interest}
                                        className="flex items-center gap-3 bg-brand-primary/20 border border-white/10 p-3.5 rounded-xl cursor-pointer hover:border-secondary-gold/20 hover:bg-secondary-gold/5 transition-all duration-200 select-none flex-row-reverse justify-end"
                                    >
                                        <input
                                            type="checkbox"
                                            value={interest}
                                            {...register("interests")}
                                            className="w-4 h-4 rounded border-white/20 accent-secondary-gold cursor-pointer"
                                        />

                                        <span className="text-xs sm:text-sm text-white/75 font-light">
                                            {interest}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {errors.interests && (
                                <p className="text-xs text-red-400 font-light">
                                    {errors.interests.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-3 text-right">
                            <label className="block text-sm font-medium text-white/80">
                                هل لديك تجارب سابقة في الاستثمار؟{" "}
                                <span className="text-secondary-gold">*</span>
                            </label>

                            <div className="flex gap-4">
                                {[
                                    {
                                        label: "نعم، لدي خبرة سابقة",
                                        value: "yes",
                                    },
                                    {
                                        label: "لا، لا توجد خبرة",
                                        value: "no",
                                    },
                                ].map((option) => (
                                    <label
                                        key={option.value}
                                        className="flex-1 flex items-center gap-3 bg-brand-primary/20 border border-white/10 p-3.5 rounded-xl cursor-pointer hover:border-secondary-gold/20 transition-all duration-200 flex-row-reverse justify-end"
                                    >
                                        <input
                                            type="radio"
                                            value={option.value}
                                            {...register("hasExperience")}
                                            className="w-4 h-4 accent-secondary-gold cursor-pointer"
                                        />

                                        <span className="text-xs sm:text-sm text-white/75 font-light">
                                            {option.label}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {/* --- الجزء المضاف: حقل تفاصيل الخبرة الاستثمارية --- */}
                            <AnimatePresence>
                                {hasExperience === "yes" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden space-y-2 pt-2"
                                    >
                                        <label className="block text-sm font-medium text-white/60">
                                            أعطنا نبذة عن خبراتك السابقة (اختياري)
                                        </label>
                                        <textarea
                                            {...register("experienceDetails")}
                                            rows={3}
                                            placeholder="اكتب هنا تفاصيل مبسطة عن مجالات أو مشاريع استثمرت بها سابقاً..."
                                            className="w-full bg-brand-primary/40 border border-white/10 focus:border-secondary-gold/40 rounded-xl p-4 text-sm focus:outline-none transition-all duration-300 text-right resize-none"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {/* -------------------------------------------------- */}
                        </div>

                        <div
                            className="space-y-2 text-right relative"
                            ref={volumeRef}
                        >
                            <label className="block text-sm font-medium text-white/80">
                                حجم الاستثمار المتوقع{" "}
                                <span className="text-secondary-gold">*</span>
                            </label>

                            <div
                                onClick={() => setVolumeOpen(!volumeOpen)}
                                className={`w-full bg-brand-primary/40 border ${errors.investmentVolume
                                        ? "border-red-500/40"
                                        : "border-white/10 hover:border-secondary-gold/30"
                                    } rounded-xl py-3.5 pr-11 pl-4 text-sm cursor-pointer transition-all duration-300 flex items-center justify-between select-none`}
                            >
                                <span
                                    className={
                                        selectedInvestmentVolume
                                            ? "text-white"
                                            : "text-white/30"
                                    }
                                >
                                    {investmentOptions.find(
                                        (o) => o.value === selectedInvestmentVolume
                                    )?.label || "اختر الحجم المقدر"}
                                </span>

                                <ChevronDown
                                    size={16}
                                    className={`text-white/40 transition-transform duration-300 ${volumeOpen ? "rotate-180" : ""
                                        }`}
                                />

                                <DollarSign
                                    size={18}
                                    className="absolute right-4 text-white/30"
                                />
                            </div>

                            <AnimatePresence>
                                {volumeOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute z-50 w-full mt-1 rounded-xl border border-secondary-gold/20 bg-card-dark shadow-2xl"
                                    >
                                        {investmentOptions.map((option) => (
                                            <div
                                                key={option.value}
                                                onClick={() => {
                                                    setValue(
                                                        "investmentVolume",
                                                        option.value,
                                                        {
                                                            shouldValidate: true,
                                                        }
                                                    );
                                                    setVolumeOpen(false);
                                                }}
                                                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selectedInvestmentVolume === option.value
                                                        ? "bg-secondary-gold/10 text-secondary-gold"
                                                        : "text-white/80 hover:text-white hover:bg-secondary-gold/10"
                                                    }`}
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {errors.investmentVolume && (
                                <p className="text-xs text-red-400 font-light">
                                    {errors.investmentVolume.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <BecomeInvestorWhatsAppButton
                                formData={fullData}
                                isValid={isValid}
                            />
                        </div>

                    </form>
                </motion.div>
            </div>
        </main>
    );
}