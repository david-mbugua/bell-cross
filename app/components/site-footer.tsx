import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { primaryLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link aria-label="Bell & Cross home" className="footer-brand-lockup" href="/#header">
              <Image
                alt=""
                aria-hidden="true"
                className="footer-brand-symbol"
                height={52}
                src="/bell-cross-mark.png"
                width={52}
              />
              <span className="footer-brand-name">Bell &amp; Cross</span>
            </Link>
            <p>Enterprise technology and digital services from Nairobi, Kenya.</p>
          </div>

          <div className="footer-navigation-column">
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {primaryLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
              <Link href="/article.html">Enterprise services</Link>
            </nav>
          </div>

          <div className="footer-contact-column">
            <h2>Get in touch</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <span>{site.location}</span>
            <div className="footer-social-links">
              <a href={site.socials.linkedin} rel="noreferrer" target="_blank">
                LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a href={site.socials.instagram} rel="noreferrer" target="_blank">
                Instagram <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bell &amp; Cross Investments Ltd</span>
          <nav aria-label="Legal information">
            <Link href="/privacy.html">Privacy</Link>
            <Link href="/terms.html">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
