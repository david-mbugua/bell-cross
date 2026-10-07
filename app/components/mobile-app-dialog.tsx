"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Check, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const appServices = [
  "Native apps for iOS and Android",
  "Cross-platform apps using React Native, Flutter or Ionic",
  "Manual, automated and user-acceptance testing",
  "Integration with systems and third-party APIs",
  "Product analytics and engagement improvements",
  "Performance, loading and app-size optimisation",
];

export function MobileAppDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncWithHash = () => {
      setOpen(window.location.hash === "#details-lightbox");
    };

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  function onOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen && window.location.hash === "#details-lightbox") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Trigger asChild>
        <a className="service-more-link" href="#details-lightbox">
          App development details <ArrowRight aria-hidden="true" size={15} />
        </a>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content aria-describedby="mobile-app-description" className="app-dialog" id="details-lightbox">
          <Dialog.Close aria-label="Close mobile application details" className="dialog-close">
            <X aria-hidden="true" size={20} />
          </Dialog.Close>
          <span className="dialog-heading-rule" />
          <Dialog.Title className="dialog-title">Mobile App Development</Dialog.Title>
          <Dialog.Description className="dialog-description" id="mobile-app-description">
            Design, develop, test and support applications for iOS, Android and the web.
          </Dialog.Description>
          <ul className="app-services-list">
            {appServices.map((service) => (
              <li key={service}>
                <Check aria-hidden="true" size={17} weight="bold" />
                {service}
              </li>
            ))}
          </ul>
          <Link className="button button-primary dialog-contact-link" href="/#contact" onClick={() => onOpenChange(false)}>
            Contact <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
