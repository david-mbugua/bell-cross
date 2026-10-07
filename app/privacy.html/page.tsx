import type { Metadata } from "next";
import { PolicyNotice } from "@/components/policy-notice";

export const metadata: Metadata = {
  title: "Privacy information",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <PolicyNotice kind="privacy" />;
}
