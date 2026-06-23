import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. ضع هنا الدومين (الرابط الفعلي) الخاص بموقع قريطنة جروب عند رفعه
  const baseUrl = "https://koreitnagroup.com"; 

  // 2. مصفوفة الروابط المنظمة بناءً على صفحات موقعك الحالية
  return [
    { 
      url: `${baseUrl}/`, // الرئيسية (Home)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0 // الأولوية القصوى لجوجل
    },
    { 
      url: `${baseUrl}/services`, // الخدمات الرئيسية
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    { 
      url: `${baseUrl}/services/opportunities`, // الفرص الاستثمارية والمجتمعات التنموية
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/services/investment-institution`, // المؤسسة الاستثمارية وإدارة الأصول
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/services/projects`, // المشاريع الاستثمارية
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/services/q-business-community`, // المشاريع الاستثمارية
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/about`, // عن المجموعة (من نحن)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/about/leadership`, // القيادة والإدارة العليا
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/news-and-investment`, // الأخبار والاستثمار
      lastModified: new Date(),
      changeFrequency: 'weekly', // الأخبار تتجدد باستمرار لذا يفضل قراءتها أسبوعياً
      priority: 0.7
    },
    { 
      url: `${baseUrl}/consulting-institution`, // المؤسسة الاستشارية / دراسات الجدوى
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/become-investor`, // كن مستثمراً معنا
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/contact`, // اتصل بنا
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
  ];
}