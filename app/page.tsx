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

export default function HomePage() {
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
        name: "머무르다",
        url: "https://meomureuda-partners.vercel.app",
        inLanguage: "ko-KR",
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">본문으로 바로가기</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProblemEditorial />
        <ServiceFlow />
        <DataIntegration />
        <DevelopmentStatus />
        <BusinessModel />
        <ProjectInfo />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
