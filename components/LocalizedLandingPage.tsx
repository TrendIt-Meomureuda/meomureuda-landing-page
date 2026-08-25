import { BusinessModel } from "@/components/BusinessModel/BusinessModel";
import { Contact } from "@/components/Contact/Contact";
import { DataIntegration } from "@/components/DataIntegration/DataIntegration";
import { DevelopmentStatus } from "@/components/DevelopmentStatus/DevelopmentStatus";
import { Hero } from "@/components/Hero/Hero";
import { ProblemEditorial } from "@/components/ProblemEditorial/ProblemEditorial";
import { ProjectInfo } from "@/components/ProjectInfo/ProjectInfo";
import { ServiceFlow } from "@/components/ServiceFlow/ServiceFlow";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { getSiteContent, type Locale } from "@/data/localizedContent";

export function LocalizedLandingPage({ locale }: { locale: Locale }) {
  const content = getSiteContent(locale);
  const isKorean = locale === "ko";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Trendit",
        email: "skyupdown543@naver.com",
        telephone: "+82-10-2478-8770",
      },
      {
        "@type": "WebSite",
        name: isKorean ? "머무르다" : "Meomureuda",
        url: isKorean
          ? "https://meomureuda-partners.vercel.app"
          : "https://meomureuda-partners.vercel.app/en",
        inLanguage: isKorean ? "ko-KR" : "en-US",
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{content.skipLink}</a>
      <SiteHeader content={content.header} language={content.language} locale={locale} />
      <main id="main-content">
        <Hero content={content.hero} locale={locale} />
        <ProblemEditorial content={content.problem} />
        <ServiceFlow content={content.flow} />
        <DataIntegration content={content.data} />
        <DevelopmentStatus content={content.status} locale={locale} />
        <BusinessModel content={content.business} />
        <ProjectInfo content={content.project} locale={locale} />
        <Contact content={content.contact} locale={locale} />
      </main>
      <SiteFooter content={content.footer} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
