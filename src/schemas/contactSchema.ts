import * as z from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .min(3, "الاسم مطلوب")
        .max(50, { message: "الاسم طويل جداً" }),

    phone: z
        .string()
        .regex(/^01[0125]\d{8}$/, "رقم الهاتف غير صحيح"), // الفالديشن الخاص بالشبكات المصرية 

    email: z
        .string()
        .email("البريد غير صحيح")
        .optional()
        .or(z.literal("")),

    company: z
        .string()
        .max(100, { message: "اسم الشركة طويل جداً" })
        .optional()
        .or(z.literal("")),

    interestType: z.string().min(1, "طبيعة وموضوع الطلب مطلوبة"),

    message: z
        .string()
        .min(10, "تفاصيل الطلب يجب أن لا تقل عن 10 أحرف")
        .max(1000, { message: "الرسالة تجاوزت الحد الأقصى المسموح به" })
});

export type ContactFormValues = z.infer<typeof contactSchema>;