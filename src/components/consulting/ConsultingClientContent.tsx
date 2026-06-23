"use client";

import { motion } from "framer-motion";
import {
  Award,
  Target,
  Eye,
  CheckCircle2,
  HelpCircle,
  Building2,
  Lightbulb,
  Briefcase,
  Users,
  ShieldCheck,
  Clock,
  TrendingUp,
  GitMerge,
  BarChart3,
  Cpu,
  GraduationCap,
  Gem,
  Activity,
  Scale
} from "lucide-react";
import LogoIcon from "../Logos/Logo-icon";
const consultingIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Award,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Lightbulb,
  Briefcase,
  Users,
  ShieldCheck,
  Clock,
  TrendingUp,
  GitMerge,
  BarChart3,
  Cpu,
  GraduationCap,
  Gem,
  Activity,
  Scale
};

interface DataItem {
  title: string;
  desc: string;
  icon: string;
}

interface FeatureItem {
  title: string;
  desc: string;
}

interface ConsultingClientContentProps {
  services: DataItem[];
  values: DataItem[];
  features: FeatureItem[];
}

export default function ConsultingClientContent({ services, values, features }: ConsultingClientContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 space-y-32 select-none">

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-right"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary-gold/30 bg-secondary-gold/10 backdrop-blur-md">
            <Award size={14} className="text-secondary-gold" />
            <span className="text-xs font-semibold text-secondary-gold tracking-wide">
              نبذة عن المؤسسة
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            قريطنة جروب <br />
            <span className="text-2xl sm:text-3xl font-medium text-secondary-gold">
              لتطوير الأعمال وهيكلة الشركات
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-light leading-8 max-w-3xl">
            تعد مجموعة قريطنة بيت خبرة استشاري رائد، وشريكاً استراتيجياً موثوقاً للشركات الطموحة. نحن متخصصون في صياغة الحلول المبتكرة والمستدامة في مجالات تطوير الأعمال، هيكلة المؤسسات، وإعداد الدراسات الاقتصادية وخطط العمل.
          </p>

          <p className="text-sm sm:text-base text-white/70 font-light leading-7 max-w-3xl border-r-2 border-secondary-gold/60 pr-4">
            تأسست المجموعة على يد د. محمد عبد الرحمن قريطنة لتكون منصة تجمع بين الفكر الأكاديمي الرصين والخبرة الميدانية العميقة، من خلال فريق من الخبراء ذوي البصمة الواقعية في الإدارة والتخطيط، منطلقةً من رؤية علمية شاملة تعتمد على البحث والتطوير كركيزة أساسية للتنافسية.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 card relative"
        >
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary-gold font-bold text-xs px-4 py-1 rounded-full shadow-lg border border-white/20 text-brand-primary">
            شريكك الاستراتيجي من الفكرة إلى الريادة
          </div>

          <div className="space-y-6">
            <span className="text-5xl text-secondary-gold/20 font-serif block">“</span>
            <p className="text-white/90 italic text-sm sm:text-base leading-7 -mt-4">
              في عالم الأعمال المعاصر، لم يعد النجاح وليد الصدمة، بل هو نتيجة هندسة دقيقة تجمع بين الرؤية الاستراتيجية والقدرة على التنفيذ الواقعي. لقد أسسنا المجموعة لتكون بيتاً للخبرة يسد الفجوة بين النظريات الأكاديمية والتحديات الميدانية. أؤمن أن قوة أي كيان اقتصادي تكمن في قدرته على تحقيق الكفاءة في إدارة موارده والفاعلية في الوصول لنتائجه.
            </p>

            <div className="pt-4 border-t border-secondary-gold/20 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base text-center">
                  دكتور <br /> محمد عبد الرحمن قريطنة
                </h4>
                <p className="text-xs text-secondary-gold font-light mt-0.5 text-center">
                  المؤسس ورئيس مجلس الادارة
                </p>
              </div>
              <div className="relative overflow-hidden">
                <LogoIcon className="w-15" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card sm:p-8 flex gap-5 items-start"
        >
          <div className="p-3 rounded-xl bg-brand-primary border border-secondary-gold/30 text-secondary-gold shrink-0">
            <Eye size={24} />
          </div>
          <div className="space-y-2 text-right">
            <h3 className="text-xl font-bold">الرؤية الاستراتيجية</h3>
            <p className="text-sm text-white/80 leading-7 font-light">
              أن نصبح المرجع الإقليمي الأول في تطوير الأعمال وصياغة مستقبل الاستثمار، عبر بناء مؤسسات مرنة ومبتكرة يُحتذى بها في التحول الرقمي والحوكمة، لتتصدر المشهد التنافسي في بيئة أعمال متغيرة.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card sm:p-8 flex gap-5 items-start"
        >
          <div className="p-3 rounded-xl bg-brand-primary border border-secondary-gold/30 text-secondary-gold shrink-0">
            <Target size={24} />
          </div>
          <div className="space-y-2 text-right">
            <h3 className="text-xl font-bold">الرسالة المؤسسية</h3>
            <p className="text-sm text-white/80 leading-7 font-light">
              تمكين المستثمرين أفراداً ومؤسسات من تحقيق النمو المستدام بإدارة مشاريعهم وفق أعلى معايير الكفاءة بأقل هدر، وأفضل فاعلية بأعلى أرباح، عبر خدمات استشارية وتدريبية عالية الجودة ترتكز على الابتكار.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">باقة خدماتنا المتكاملة</h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-light">
            منظومة النجاح والاستدامة المصممة خصيصاً لتلبية متطلبات السوق والارتقاء بأداء الشركات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = consultingIconMap[service.icon] || HelpCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="p-2.5 rounded-xl bg-brand-primary border border-secondary-gold/20 text-secondary-gold w-fit transition-all duration-300 group-hover:border-secondary-gold">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold transition-colors duration-300">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-6 font-light">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">قيمنا الجوهرية</h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light">
            المبادئ الحاكمة لجميع أعمالنا الاستشارية والتنفيذية
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {values.map((val, index) => {
            const IconComponent = consultingIconMap[val.icon] || HelpCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card w-full sm:w-[280px] space-y-3"
              >
                <div className="text-secondary-gold w-fit">
                  <IconComponent size={18} />
                </div>
                <h4 className="text-base font-bold">| {val.title}</h4>
                <p className="text-xs text-white/70 leading-5 font-light">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4 text-right">
          <h2 className="text-3xl font-bold">لماذا تختار قريطنة جروب؟</h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-7">
            نحن لا نقدم حلولاً نمطية، بل نصمم أنظمة حياة مؤسسية تضمن نمو وحماية الاستثمارات في قطاعات استراتيجية متنوعة تلبي تطلعات الأجيال القادمة وتدعم ريادة أعمالكم.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2 text-right border-r border-secondary-gold/20 pr-4"
            >
              <div className="flex items-center gap-2 text-secondary-gold">
                <CheckCircle2 size={16} />
                <h4 className="text-base font-bold text-white">{feat.title}</h4>
              </div>
              <p className="text-xs text-white/70 leading-5 font-light">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}