import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  CompassTool,
  Handshake,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { EnterpriseAccordion } from "@/components/enterprise-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ServiceGrid } from "@/components/service-grid";
import { Reveal } from "@/components/reveal";
import { site, strengths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise Technology in Kenya",
  description: site.description,
  alternates: { canonical: "/" },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/bell-cross-mark.png`,
  foundingDate: site.founded,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  sameAs: [site.socials.linkedin, site.socials.instagram],
};

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="site-page">
        <SiteHeader />
        <main id="main-content">
          <section aria-labelledby="hero-heading" className="hero-section" id="header">
            <div className="shell hero-layout">
              <Reveal className="hero-copy" entrance>
                <p className="hero-eyebrow">
                  <span className="hero-eyebrow-line" /> Technology for a connected world
                </p>
                <h1 id="hero-heading">Technology that brings business together.</h1>
                <p className="hero-description">
                  We connect business systems, digital services and network infrastructure across
                  Kenya.
                </p>
                <Link className="button button-primary hero-action" href="#details">
                  Explore our services <ArrowRight aria-hidden="true" size={17} />
                </Link>
                <p className="hero-location">Nairobi, Kenya</p>
              </Reveal>
              <figure className="hero-artwork">
                <Image
                  alt="Illuminated fiber-optic strands representing connections across a city"
                  className="hero-image"
                  fill
                  fetchPriority="high"
                  loading="eager"
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 48vw, 56vw"
                  src="/images/fiber-connectivity.png"
                />
              </figure>
            </div>
          </section>

          <section aria-labelledby="services-heading" className="section services-section" id="details">
            <div className="shell">
              <Reveal className="section-heading service-section-heading">
                <p className="section-kicker">How we help</p>
                <h2 id="services-heading">Technology built around your needs.</h2>
                <p>
                  From digital products to the infrastructure behind them, we help businesses
                  plan, build and support technology that works together.
                </p>
              </Reveal>
              <ServiceGrid />
            </div>
          </section>

          <section aria-labelledby="enterprise-heading" className="section enterprise-section">
            <div className="shell enterprise-layout">
              <div className="enterprise-media-column">
                <div className="enterprise-image-frame">
                  <Image
                    alt="Conceptual image of data-centre servers and fibre connections"
                    className="enterprise-image"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 42vw"
                    src="/images/enterprise-infrastructure.png"
                  />
                </div>
              </div>
              <Reveal className="enterprise-copy-column">
                <div className="section-heading">
                  <h2 id="enterprise-heading">A connected enterprise, from core to cloud.</h2>
                  <p>
                    Practical systems, networks and security services, supported throughout their
                    lifecycle.
                  </p>
                </div>
                <EnterpriseAccordion />
                <Link className="text-link enterprise-details-link" href="/article.html">
                  Enterprise service details <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Reveal>
            </div>
          </section>

          <section aria-labelledby="lifecycle-heading" className="lifecycle-section">
            <div className="shell lifecycle-content">
              <div className="section-heading lifecycle-introduction">
                <h2 id="lifecycle-heading">From the first plan to ongoing support.</h2>
              </div>
              <ol className="lifecycle-steps">
                <li>
                  <CompassTool aria-hidden="true" size={25} weight="regular" />
                  <span>Plan</span>
                </li>
                <li>
                  <Handshake aria-hidden="true" size={25} weight="regular" />
                  <span>Build</span>
                </li>
                <li>
                  <CheckCircle aria-hidden="true" size={25} weight="regular" />
                  <span>Support</span>
                </li>
                <li>
                  <ShieldCheck aria-hidden="true" size={25} weight="regular" />
                  <span>Manage</span>
                </li>
              </ol>
            </div>
          </section>

          <section aria-labelledby="strengths-heading" className="section strengths-section" id="strengths">
            <div className="shell strengths-layout">
              <div className="strengths-heading-block">
                <h2 id="strengths-heading">Relationships first. Good work follows.</h2>
                <p>
                  Our strategy is simple: build relationships and create long-term partnerships
                  based on mutual progress and trust.
                </p>
              </div>
              <Reveal className="strengths-list-reveal" delay={0.08}>
                <ul className="strengths-list">
                  {strengths.map((strength) => (
                    <li key={strength.title}>
                      <span className="strength-title">{strength.title}</span>
                      <span className="strength-description">{strength.copy}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>

          <section aria-labelledby="about-heading" className="section about-section" id="about">
            <div className="shell about-layout">
              <div className="about-image-frame">
                <Image
                  alt="Desktop and laptop computers set up for digital work"
                  className="about-image"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 50vw"
                  src="/images/about.jpg"
                />
              </div>
              <Reveal className="about-copy" delay={0.08}>
                <h2 id="about-heading">Kenyan expertise in a connected world.</h2>
                <p>
                  Bell &amp; Cross Investment Ltd was founded in Kenya in {site.founded}. Our team
                  brings sales and technical experience to enterprise systems, infrastructure and
                  digital services.
                </p>
                <p>
                  Our vision is a future where information and communications technology can
                  contribute to economic, environmental and social benefits.
                </p>
                <div className="about-fact">
                  <span>Based in</span>
                  <span>{site.location}</span>
                </div>
              </Reveal>
            </div>
          </section>

          <section aria-labelledby="contact-heading" className="contact-section" id="contact">
            <div className="shell contact-layout">
              <div className="contact-copy">
                <p className="section-kicker">Start a conversation</p>
                <h2 id="contact-heading">What can we help you build?</h2>
                <p>
                  Tell us what your business needs. If your enquiry involves confidential details,
                  ask about arranging a signed NDA before you share them.
                </p>
              </div>
              <div className="contact-links">
                <a className="contact-method" href={`mailto:${site.email}`}>
                  <span>Email</span>
                  <span>
                    {site.email} <ArrowUpRight aria-hidden="true" size={17} />
                  </span>
                </a>
                <a className="contact-method" href={`tel:${site.phoneHref}`}>
                  <span>Call</span>
                  <span>
                    {site.phone} <ArrowUpRight aria-hidden="true" size={17} />
                  </span>
                </a>
                <div className="contact-method contact-location">
                  <span>Find us</span>
                  <span>{site.location}</span>
                </div>
                <div className="contact-socials">
                  <a href={site.socials.linkedin} rel="noreferrer" target="_blank">
                    LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                  <a href={site.socials.instagram} rel="noreferrer" target="_blank">
                    Instagram <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
