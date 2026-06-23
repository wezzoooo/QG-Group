import * as z from "zod";
import { egyptData } from "@/data/egypt-regions";

export { egyptData };

export const investorFormSchema = z.object({
    fullName: z.string().min(3, "الاسم مطلوب"),
    phone: z.string().regex(/^01[0125]\d{8}$/, "رقم الهاتف غير صحيح"),
    governorate: z.string().min(1, "المحافظة مطلوبة"),
    city: z.string().min(1, "المركز مطلوب"),
    interests: z.array(z.string()).min(1, "اختر مجالاً واحداً على الأقل"),
    investmentVolume: z.string().min(1, "حجم الاستثمار مطلوب"),
    hasExperience: z.enum(["yes", "no"]),

    email: z.string().email("البريد غير صحيح").optional().or(z.literal("")),
    experienceDetails: z.string().optional().or(z.literal("")),
});

export type InvestorFormInputs = z.infer<typeof investorFormSchema>;