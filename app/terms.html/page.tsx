import type { Metadata } from "next";
import { PolicyNotice } from "@/components/policy-notice";

export const metadata: Metadata = {
  title: "Terms of use",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <PolicyNotice kind="terms" />;
}
