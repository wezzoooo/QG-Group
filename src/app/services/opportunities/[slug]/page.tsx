import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { slugDetailedContent } from "@/data/opportunities";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const content = slugDetailedContent[resolvedParams.slug];
  
  if (!content) {
    return { title: "الصفحة غير موجودة | قريطنة جروب" };
  }

  return {
    title: `${content.title} | قريطنة جروب`,
    description: content.metaDescription,
    alternates: {
      canonical: `https://qg-group.com/services/opportunities/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${content.title} | قريطنة جروب`,
      description: content.metaDescription,
      type: "website",
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(slugDetailedContent).map((slug) => ({
    slug: slug,
  }));
}

export default async function OpportunityDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const data = slugDetailedContent[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative w-full min-h-screen text-white">
      
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* زر العودة للفرص */}
        <div className="pt-6">
          <Link 
            href="/services/opportunities" 
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-secondary-gold transition-colors group"
          >
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            <span>العودة لجميع الفرص</span>
          </Link>
        </div>

        {/* عنوان الصفحة الرئيسي */}
        <header className="space-y-6 text-right border-r-2 border-secondary-gold/30 pr-6">
          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-slate-400 leading-tight">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-8 max-w-4xl">
            {data.longDesc}
          </p>
        </header>

        {/* قسم الـ Highlights */}
        <section className="card p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3 text-secondary-gold">
            <ShieldCheck size={22} />
            <h2 className="text-xl sm:text-2xl font-bold text-white">{data.highlightsTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-white/[0.01] border border-white/[0.03] rounded-xl p-4 hover:border-secondary-gold/20 transition-colors duration-300"
              >
                <CheckCircle2 size={16} className="text-secondary-gold shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* قسم خطة العمل (Action Plan) */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 text-secondary-gold">
            <HelpCircle size={22} />
            <h2 className="text-xl sm:text-2xl font-bold text-white">{data.actionPlanTitle}</h2>
          </div>

          <div className="relative border-r border-white/[0.08] pr-6 space-y-8 mr-2">
            {data.actionPlan.map((step, index) => (
              <div key={index} className="relative space-y-1">
                {/* الدائرة المتناسقة مع الـ Timeline وخلفية الكود */}
                <span className="absolute -right-[31px] top-0 w-4 h-4 rounded-full bg-card-dark border-2 border-secondary-gold flex items-center justify-center z-10" />
                
                <div className="bg-gradient-to-l from-white/[0.01] to-transparent p-4 rounded-xl border border-white/[0.02] hover:border-secondary-gold/10 transition-colors duration-300">
                  <span className="text-xs text-secondary-gold font-mono block mb-1">الخطوة 0{index + 1}</span>
                  <p className="text-sm sm:text-base text-slate-300 font-light">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* الفوتر النهائي الموحد للدعوة إلى اتخاذ إجراء */}
        <footer className="card border-b-secondary-gold/30 p-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-white">هل أنت جاهز لاستغلال هذه الفرصة؟</h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl mx-auto leading-6">
            يسعدنا في قريطنة جروب تلقي طلباتكم واستفساراتكم لبدء دراسة أطر التعاون المشترك وصياغة مستقبل أكثر نمواً وازدهاراً. تواصل مع مستشارينا الآن.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-secondary-gold/20 to-secondary-gold/5 border border-secondary-gold/30 text-xs text-secondary-gold hover:border-secondary-gold hover:text-white hover:bg-secondary-gold/20 transition-all duration-300 font-medium"
            >
              تقديم طلب مباشر للقطاع
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}