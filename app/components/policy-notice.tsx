import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export function PolicyNotice({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy information" : "Terms of use";

  return (
    <div className="site-page">
      <SiteHeader />
      <main className="notice-main" id="main-content">
        <div className="notice-content">
          <Link className="article-back-link" href="/#header">
            Home
          </Link>
          <h1>{title}</h1>
          <p>
            {isPrivacy
              ? "Bell & Cross Investments Ltd does not currently publish a privacy policy on this website."
              : "Bell & Cross Investments Ltd does not currently publish terms of use for this website."}
          </p>
          <p>
            {isPrivacy
              ? "For questions about personal information related to an enquiry, contact us directly."
              : "For questions about using this website, contact us directly."}
          </p>
          <a className="button button-primary notice-email" href={`mailto:${site.email}`}>
            Email {site.email}
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
