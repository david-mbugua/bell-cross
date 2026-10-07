import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { EnterpriseAccordion } from "@/components/enterprise-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise Systems, Networks and Security",
  description:
    "Explore Bell & Cross enterprise cloud, network infrastructure, security and managed IT services in Kenya.",
  alternates: { canonical: "/article.html" },
};

const deliveryStages = [
  {
    title: "Consult and assess",
    copy: "Review requirements, existing systems and intended business outcomes.",
  },
  {
    title: "Integrate",
    copy: "Plan and connect the technology services your organisation needs.",
  },
  {
    title: "Support and manage",
    copy: "Maintain access to ICT services through professional and managed support.",
  },
];

export default function EnterprisePage() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main id="main-content">
        <section aria-labelledby="article-heading" className="article-hero">
          <div className="shell article-hero-layout">
            <Reveal className="article-hero-copy" entrance>
              <Link className="article-back-link" href="/#details">
                Services
              </Link>
              <h1 id="article-heading">Enterprise technology, built to work together.</h1>
              <p>
                {`Systems integration, networking, security and managed services for businesses in ${site.location}.`}
              </p>
              <Link className="button button-primary" href="/#contact">
                Contact <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Reveal>
            <Reveal className="article-image-frame" delay={0.12} entrance>
              <Image
                alt="Conceptual image of enterprise server racks and fibre connections"
                className="article-image"
                fill
                fetchPriority="high"
                loading="eager"
                sizes="(max-width: 767px) 100vw, 50vw"
                src="/images/enterprise-infrastructure.png"
              />
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="article-capabilities-heading" className="section article-capabilities-section">
          <div className="shell article-capabilities-layout">
            <div className="article-section-introduction">
              <h2 id="article-capabilities-heading">ICT enterprise technology domains.</h2>
              <p>
                Bell &amp; Cross focuses on established strengths and enterprise technology
                services positioned to help organisations develop their IT infrastructure.
              </p>
            </div>
            <div className="article-capabilities-content">
              <EnterpriseAccordion />
            </div>
          </div>
        </section>

        <section aria-labelledby="delivery-heading" className="section article-delivery-section">
          <div className="shell">
            <div className="section-heading delivery-heading">
              <h2 id="delivery-heading">Support across the IT lifecycle.</h2>
              <p>
                Technology leaders need to meet business objectives while managing complex
                environments and dependable access to ICT services.
              </p>
            </div>
            <ol className="delivery-list">
              {deliveryStages.map((stage) => (
                <li key={stage.title}>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                </li>
              ))}
            </ol>
            <p className="article-managed-copy">
              Our IT outsourcing services use standardised, ITIL-based processes, procedures and
              work instructions to support consistent service delivery. Our teams can also help
              organisations assess cloud opportunities, consumption needs, security,
              compliance, integration and internal readiness.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
